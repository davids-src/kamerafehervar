# Multi-stage Dockerfile for Next.js (standalone output)

# Stage 1: Base image
FROM node:20-alpine AS base

# Stage 2: Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Stage 3: Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Client-side Next.js environment variables (embedded at build time)
ARG NEXT_PUBLIC_APP_URL="https://kamerafehervar.hu"
ARG NEXT_PUBLIC_SITE_URL="https://kamerafehervar.hu"
ARG NEXT_PUBLIC_PHONE="+36 70 273 5532"
ARG NEXT_PUBLIC_SIRONIC_PHONE="+36 70 273 5532"
ARG NEXT_PUBLIC_GA_ID=""

ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_PHONE=$NEXT_PUBLIC_PHONE
ENV NEXT_PUBLIC_SIRONIC_PHONE=$NEXT_PUBLIC_SIRONIC_PHONE
ENV NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID

RUN npm run build

# Stage 4: Production runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy static assets and public files
COPY --from=builder /app/public ./public

# Set up prerender cache directory permissions
RUN mkdir .next && chown nextjs:nodejs .next

# Copy standalone build and static files
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
