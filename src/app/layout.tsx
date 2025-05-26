import Header from '@/components/Header';
import './global.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Future Lab Korea',
  description: '새로운 시대! 새로운 세대! 신재생에너지, 스마트팜 등등 녹색성장을 통한 가치 창출',
  viewport: 'initial-scale=1.0, width=device-width',
  openGraph: {
    title: 'Future Lab Korea',
    description: '새로운 시대! 새로운 세대! 신재생에너지, 스마트팜 등등 녹색성장을 통한 가치 창출',
    // images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '...' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
