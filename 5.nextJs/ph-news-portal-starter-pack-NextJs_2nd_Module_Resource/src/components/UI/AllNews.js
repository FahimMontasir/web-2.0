import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

import Link from "next/link";

export const AllNews = ({ allNews }) => {
  const { Meta } = Card;

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "50px", margin: "30px 0px" }}>
        Today highlight
      </h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {allNews.map((news) => (
          <Col key={news.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={news?.image_url}
                  width={500}
                  height={200}
                  alt="news image"
                />
              }
            />
            <Meta title={news?.title} />
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
            <p style={{ fontSize: "15px" }}>
              {news?.description.length > 100
                ? news.description.slice(0, 70) + "..."
                : news.description}
            </p>
            <Link href={`/news/${news.id}`}>
              <Button
                style={{
                  marginTop: "20px",
                  width: "100%",
                  backgroundColor: "black",
                  margin: "10px 0",
                  fontSize: "15px",
                  textAlign: "center",
                  color: "white",
                }}
              >
                keep Reading <ArrowRightOutlined />
              </Button>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
