import "tailwindcss/tailwind.css";
import { Fragment } from "react";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Pharma-Link</title>
        <meta name="description" content="Created by PL" />
        <link rel="icon" href="/favicon.ico" />
<<<<<<< HEAD
        <link href="https://fonts.googleapis.com/css2?family=Rosario" rel="stylesheet"></link>
=======
        <link href="https://fonts.googleapis.com/css2?family=Rosario" rel="stylesheet" />
>>>>>>> main
      </Head>

      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
