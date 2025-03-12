'use client';

import '@/styles/index.css';

import { ReactNode, useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import { useServerInsertedHTML } from 'next/navigation';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    return styledComponentsStyleSheet.getStyleElement();
  });

  return (
    <html lang="ko">
      <head>
        <title>Future Lab Korea</title>
        <meta
          name="description"
          content="새로운 시대! 새로운 세대! 신재생에너지, 스마트팜 등등 녹색성장을 통한 가치 창출"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Future Lab Korea" />
        <meta
          property="og:description"
          content="새로운 시대! 새로운 세대! 신재생에너지, 스마트팜 등등 녹색성장을 통한 가치 창출"
        />
      </head>
      <meta name="naver-site-verification" content="25aae90c6571989d45280f9e86257e6bbc497ea3" />
      <body>
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
          {children}
        </StyleSheetManager>
      </body>
    </html>
  );
}
