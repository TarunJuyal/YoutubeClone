import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Typography, Card, Avatar, Col, Row } from "antd";
import Axios from "axios";
import moment from "moment";
import { LoadingOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";
import { Static_Content } from "../../config"

const { Title } = Typography;
const { Meta } = Card;

function CategoryPage(props) {
  const categoryName = props.match.params.categoryName;
  const [Videos, setVideos] = useState([]);
  const [title, settitle] = useState("");

  useEffect(() => {
    switch (categoryName) {
      case "filmAndAnimation":
        settitle("Film & Animation");
        break;
      case "music":
        settitle("Music");
        break;
      case "gaming":
        settitle("Gaming");
        break;
      case "sports":
        settitle("Sports");
        break;
      default:
        settitle("");
    }
    Axios.get("/api/video/getVideos").then((response) => {
      if (response.data.success) {
        setVideos(response.data.videos);
      } else {
        alert("Failed to get videos");
      }
    });
  }, [categoryName]);

  Videos.sort(() => {
    return 0.5 - Math.random();
  });

  const renderCards = Videos.map((video, index) => {
    if (video.category === title) {
      let minutes = Math.floor(video.duration / 60);
      let seconds = Math.floor(video.duration - minutes * 60);
      return (
        <Col key={index} lg={6} md={8} xs={24}>
          <div style={{ position: "relative" }}>
            <Link to={`/video/${video._id}`}>
              <img
                style={{ width: "100%" }}
                src={`${Static_Content}${video.thumbnail}`}
                alt="thumbnail"
              ></img>
              <div
                className="duration"
                style={{
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  margin: "4px",
                  color: "white",
                  backgroundColor: "black",
                  opacity: 0.8,
                  padding: "2px 4px",
                  borderRadius: "2px",
                  letterSpacing: "0.5px",
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "12px",
                }}
              >
                <span>
                  {minutes}:{seconds}
                </span>
              </div>
            </Link>
          </div>
          <br />
          <Meta
            avatar={<Avatar src={video.writer.image} />}
            title={video.title}
          />
          <Link to={`/channel/${video.writer._id}`} style={{color:"black"}}>
            {`${video.writer.firstName}
            ${video.writer.lastName}`}
          </Link>
          <br />
          <span style={{ marginLeft: "3rem" }}>{video.views} views</span> -{" "}
          <span>{moment(video.createdAt).format("MMM Do YY")}</span>
          <br />
          <br />
        </Col>
      );
    }
  });

  if (Videos) {
    return (
      <React.Fragment>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div style={{ width: "85%", margin: "3rem auto" }}>
          <Title level={2}>{title}</Title>
          <hr />
          {Videos && <Row gutter={16}>{renderCards}</Row>}
        </div>
      </React.Fragment>
    );
  } 
  else if(Videos.length()===0){
    return (
      <div className="app ">
        <Title level={2}>No videos of this Category</Title>
      </div>
    );
  }
  else {
    return (
      <div className="app ">
        <LoadingOutlined style={{ fontSize: "5rem" }} />
      </div>
    );
  }
}

export default withRouter(CategoryPage);
