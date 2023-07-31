import Head from "next/head";
import Image from "next/image";

const AlbumPage = () => {
  return (
    <div>
      <Head>
        <title>album page</title>
        <meta name="description" content="about this page" />
      </Head>
      <Image
        src={
          "https://previews.123rf.com/images/sarahdesign/sarahdesign1501/sarahdesign150100810/35672359-next-button.jpg"
        }
        alt="image"
        fill
      />
    </div>
  );
};

export default AlbumPage;
