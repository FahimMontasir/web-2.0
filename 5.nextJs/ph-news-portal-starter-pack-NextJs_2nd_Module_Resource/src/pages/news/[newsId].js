import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const NewsDetailsPage = ({ news }) => {
  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{
        marginTop: "50px",
      }}
    >
      <Col span={12}>
        <Image
          src={news?.image_url}
          width={500}
          height={200}
          alt="news image"
        />
      </Col>
      <Col span={12}>
        <h1>{news?.title}</h1>
        <div
          className="line"
          style={{
            height: "5px",
            margin: "20px 0",
            background: "#000",
            width: "100%",
          }}
        />
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "gray",
            margin: "10px 0",
            fontSize: "12px",
          }}
        >
          <span>
            <CalendarOutlined /> {news?.release_date}
          </span>
          <span>
            <CommentOutlined /> {news?.comment_count}
          </span>
          <span>
            <ProfileOutlined /> {news?.category}
          </span>
        </p>
        <p style={{ fontSize: "15px" }}>{news?.description}</p>
      </Col>
    </Row>
  );
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3005/news");
  const newses = await res.json();

  const paths = newses.map((news) => ({ params: { newsId: news.id } }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`http://localhost:3005/news/${params.newsId}`);
  const data = await res.json();
  return {
    props: {
      news: data,
    },
    revalidate: 10, //sc
  };
};
