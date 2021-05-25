import "tailwindcss/tailwind.css";
import { Fragment } from "react";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Pharmalink</title>
        <meta name="description" content="Created By PL" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Rosario" rel="stylesheet"></link>
      </Head>

      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
