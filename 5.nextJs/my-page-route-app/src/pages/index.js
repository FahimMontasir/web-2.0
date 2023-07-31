import RootLayout from "@/components/layout/RootLayout";
import { Typography } from "antd";

const HomePage = () => {
  return <Typography>home</Typography>;
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
