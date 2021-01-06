import React, { useState, useEffect, Suspense } from "react";
import { Typography, List, Avatar, Row, Col } from "antd";
import Axios from "axios";
import { Helmet } from "react-helmet";
import { Static_Content } from "../../config";
import { LoadingOutlined } from "@ant-design/icons";

const SideVideo = React.lazy(()=>import("./Sections/SideVideo"));
const Subscriber = React.lazy(()=>import("./Sections/Subscriber"));
const Comments = React.lazy(()=>import("./Sections/Comments"));
const LikeDislikes = React.lazy(()=>import("./Sections/LikeDislikes"));

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
        <Suspense fallback={<div className="app"><LoadingOutlined style={{ fontSize: "4rem" }} /></div>}>
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
                src={`${Static_Content}${Video.filePath}`}
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
        </Suspense>
      </React.Fragment>
    );
  } else {
    return <div className="app"><LoadingOutlined style={{ fontSize: "4rem" }} /></div>;
  }
}

export default DetailVideoPage;
