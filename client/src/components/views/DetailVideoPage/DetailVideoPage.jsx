import React, { useState, useEffect } from "react";
import { Typography, List, Avatar, Row, Col } from "antd";
import Axios from "axios";
import SideVideo from "./Sections/SideVideo";
import { Helmet } from "react-helmet";
import Subscriber from "./Sections/Subscriber";
import Comments from "./Sections/Comments";
import LikeDislikes from "./Sections/LikeDislikes";

const { Title } = Typography;

function DetailVideoPage(props) {
  const videoId = props.match.params.videoId;
  const videoVariable = { videoId: videoId };
  const [Video, setVideo] = useState([]);
  const [CommentList, setCommentList] = useState([]);

  useEffect(() => {

    Axios.post("/api/video/getVideo", videoVariable).then((response) => {
      if (response.data.success) {
        setVideo(response.data.video);
      } else {
        alert("Failed to get video");
      }
    });

    Axios.post("/api/comment/getComments", videoVariable).then((response) => {
      if (response.data.success) {
        setCommentList(response.data.comments);
      } else {
        alert("Failed to get video");
      }
    });

  }, []);

  const updateComment = (newComment) => {
    setCommentList(CommentList.concat(newComment));
  };

  if (Video.writer) {
    return (
      <React.Fragment>
        <Helmet>
          <title>{Video.title}</title>
        </Helmet>
        <Row>
          <Col lg={17} xs={24}>
            <div
              className="postPage"
              style={{ width: "100%", padding: "2rem 2em" }}
            >
              <video
                style={{ width: "100%" }}
                src={`http://localhost:5000/${Video.filePath}`}
                controls
                autoPlay
                loop
              ></video>
              <Row>
              <Col lg={15} sm={14} xs={24}>
              <List.Item
              >
                <List.Item.Meta
                  avatar={<Avatar src={Video.writer && Video.writer.image} />}
                  title={<Title level={4}>{Video.title}</Title>}
                  description={
                    <span style={{ fontSize: "1.3em", color: "black" }}>
                      {Video.writer.firstName} {Video.writer.lastName} -{" "}
                      {Video.views} views
                    </span>
                  }
                />
              </List.Item>
              </Col>
              <Col lg={1} sm={1} xs={24}>
                   <List.Item actions={[
                  <Row>
                    <LikeDislikes
                    video
                    videoId={videoId}
                    userId={localStorage.getItem("userId")}
                  />
                  </Row>,
                  <Row>
                    <Subscriber
                    userTo={Video.writer._id}
                    userFrom={localStorage.getItem("userId")}
                  />
                  </Row>,
                ]}>
              </List.Item>
              </Col>
              </Row>
              <List.Item>
                  <List.Item.Meta description={Video.description} />
              </List.Item>
              <Comments
                CommentList={CommentList}
                postId={Video._id}
                refreshFunction={updateComment}
              />
            </div>
          </Col>
          <Col lg={7} xs={24}>
            <SideVideo />
          </Col>
        </Row>
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
}

export default DetailVideoPage;
