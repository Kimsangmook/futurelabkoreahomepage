import Head from "next/head";
import React from "react";

interface Props {
  title: string;
  description?: string;
}
const SEO = ({ title, description }:Props) => {
  return (
    <Head>
      {title && <title>{`${title} | Future Lab Korea`}</title>}
      {description && <meta name="description" content={description} />}
    </Head>
  );
};

export default SEO;