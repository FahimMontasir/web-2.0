import Head from "next/head";
import { useSession } from "next-auth/react";
const HomePage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>
      <h2>Logged in user: {session?.user.name}</h2>
    </div>
  );
};

export default HomePage;
