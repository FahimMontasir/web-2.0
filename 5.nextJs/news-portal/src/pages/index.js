import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import { AllNews } from "@/components/UI/AllNews";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("@/components/UI/Banner"), {
  loading: () => <h1>Loading...</h1>,
  ssr: false,
});

const HomePage = ({ newsData }) => {
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicHeader />
      <AllNews allNews={newsData} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3005/news");
  const data = await res.json();
  return {
    props: {
      newsData: data,
    },
    revalidate: 10, //sc
  };
};
