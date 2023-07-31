import { Button } from "antd";
import Link from "next/link";

const NewsPage = () => {
  return (
    <div>
      <h1>hello News page</h1>
      <Button>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
};

export default NewsPage;
