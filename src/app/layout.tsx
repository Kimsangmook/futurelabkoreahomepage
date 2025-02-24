'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { ReactNode, useState } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    return styledComponentsStyleSheet.getStyleElement();
  });

  return (
    <html lang="ko">
      <head />
      <body>
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
      </body>
    </html>
  );
}
