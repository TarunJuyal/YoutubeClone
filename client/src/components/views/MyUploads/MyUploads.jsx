import React, { useEffect,useState } from 'react';
import {Card,Avatar,Col,Row,Typography } from "antd";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Static_Content } from "../../config";

const {Meta}=Card;
const {Title}=Typography;

const MyUploadsPage = () => {
    const user=useSelector((state)=>state.user);
    const [Videos, setVideos] = useState([]);
    const videoVariable = { writer: user?.userData };
    useEffect(()=>{
        axios.post("/api/video/getUserVideos",videoVariable).then((response) => {
            if (response.data.success) {
               setVideos(response.data.videos);
            } else {
               alert("Failed to get videos");
            }
        });
    },[user?.userData?._id])

    const renderCards = Videos.map((video, index) => {
    let minutes = Math.floor(video.duration / 60);
    let seconds = Math.floor(video.duration - minutes * 60);
    return (
      <Col key={index}  lg={6} md={8} xs={24} style={{marginBottom:"3vh"}}>
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
      </Col>
    );
  });

  return(
        <React.Fragment>
      <div style={{ width: "85%", margin: "3rem auto" }}>
        {Videos.length>0 && (
        <>        
        <Title level={2}>My Uploads</Title>
        <hr />
        <Row gutter={16}>{renderCards}</Row>
        </>
        )}
        {Videos.length===0 && <Title level={1}>No Uploads Yet</Title> }
      </div>
    </React.Fragment>
  )
}
 
export default MyUploadsPage;