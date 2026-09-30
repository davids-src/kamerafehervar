import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCallBar } from '@/components/MobileCallBar';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
