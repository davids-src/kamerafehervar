# kamerafehervar

## Docker futtatás

### 1. docker-compose használatával
Hozd létre vagy állítsd be a környezeti változókat (pl. `.env` fájlban a `.env.example` alapján), majd indítsd el a konténert:

```bash
docker compose up -d --build
```

### 2. Saját Docker image építése és futtatása manuálisan
```bash
docker build -t ghcr.io/davids-src/kamerafehervar:main .
docker run -d --name kamerafehervar_web -p 8106:3000 ghcr.io/davids-src/kamerafehervar:main
```

