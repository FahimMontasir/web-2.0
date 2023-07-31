import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);

  return <h1>hello Error</h1>;
};

export default ErrorPage;
