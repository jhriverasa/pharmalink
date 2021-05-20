import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Pharmalink</title>
        <meta name="description" content="Created By PL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="font-bold">Hello world</div>
      <div className="font-light">otro div</div>
    </div>
  );
};

export default Home;
