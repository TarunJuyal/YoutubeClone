import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Typography, Card, Avatar, Col, Row } from "antd";
import Axios from "axios";
import moment from "moment";

const { Title } = Typography;
const { Meta } = Card;

function SearchPage(props) {
  const searchString = props.match.params.searchString;
  const [Videos, setVideos] = useState([]);
  useEffect(() => {
    const searchVariable = { searchString: searchString };
    Axios.post("/api/video/search", searchVariable).then((response) => {
      if (response.data.success) {
        console.log(response.data.videos);
        setVideos(response.data.videos);
      } else {
        alert("failed to get search");
      }
    });
  }, []);

  const renderCards = Videos.map((video, index) => {
    let minutes = Math.floor(video.duration / 60);
    let seconds = Math.floor(video.duration - minutes * 60);
    return (
      <Col key={index} lg={6} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <Link to={`/video/${video._id}`}>
            <img
              style={{ width: "100%" }}
              src={`http://localhost:5000/${video.thumbnail}`}
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
  });

  return (
    <React.Fragment>
      <div style={{ width: "85%", margin: "3rem auto" }}>
        {Videos.length>0 && (
        <>        
        <Title level={2}>Search Results</Title>
        <hr />
        <Row gutter={16}>{renderCards}</Row>
        </>
        )}
        {Videos.length===0 && <Title level={1}>Ooops ..... No videos Found</Title> }
      </div>
    </React.Fragment>
  );
}

export default withRouter(SearchPage);
