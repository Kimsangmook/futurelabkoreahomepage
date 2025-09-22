import './global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Future Lab Korea - 사이트 리뉴얼 중',
  description: '현재 웹사이트를 새롭게 단장하고 있습니다. 더욱 향상된 서비스로 곧 찾아뵙겠습니다.',
  viewport: 'initial-scale=1.0, width=device-width',
  openGraph: {
    title: 'Future Lab Korea - 사이트 리뉴얼 중',
    description: '현재 웹사이트를 새롭게 단장하고 있습니다. 더욱 향상된 서비스로 곧 찾아뵙겠습니다.',
    // images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '...' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
