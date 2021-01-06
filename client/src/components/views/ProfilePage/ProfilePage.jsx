import React, { useEffect,useState } from 'react';
import {Card,Avatar,Col,Row,Typography,List } from "antd";
import axios from "axios";
import { USER_SERVER, Static_Content } from "../../config";
import moment from "moment";
import { Link } from "react-router-dom";
import Subscriber from "../DetailVideoPage/Sections/Subscriber";
import { LoadingOutlined } from "@ant-design/icons";

const {Meta}=Card;
const {Title}=Typography;

const ProfilePage = (props) => {
    const [Profile, setProfile] = useState([]);
    const [Videos, setVideos] = useState([]);
    const profileVariable = { userId: props.match.params.profileId };
    useEffect(()=>{
        axios.post(`${USER_SERVER}/getUser`,profileVariable).then((response)=>{
            if(response.data.success){
                setProfile(response.data.user[0]);
                const videoVariable = { writer:response.data.user[0] };
                axios.post("/api/video/getUserVideos",videoVariable).then((response) => {
                if (response.data.success) {
                    setVideos(response.data.videos);
                 } else {
                    alert("Failed to get videos");
                }
        });
            }else{
                alert("Failed to fetch profile!")
            }
        })
    },[])

    const renderCards = Videos.map((video, index) => {
    let minutes = Math.floor(video.duration / 60);
    let seconds = Math.floor(video.duration - minutes * 60);
    return (
      <Col key={index}  lg={6} md={8} sm={12} xs={24} style={{marginBottom:"3vh"}}>
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

  if(Profile._id){
      return ( 
    <div style={{ width: "85%", margin: "3rem auto" }}>
        <Row>
            <Col lg={17} sm={16} xs={24}>
                <List.Item>
                <List.Item.Meta avatar={<Avatar size={70} src={Profile && Profile.image} />} 
                title={<Title>{Profile && `${Profile.firstName} ${Profile.lastName}`}</Title>}/>
                </List.Item>
            </Col>
            <Col lg={4} sm={4} xs={24} offset={3}>
                <List.Item actions={[
                    <Subscriber
                    userTo={Profile._id}  
                    userFrom={localStorage.getItem("userId")}
                   />,
                ]}>
                </List.Item>
            </Col>
        </Row>
        <hr />
        {Videos && <Row gutter={16}>{renderCards}</Row>}
    </div>
     );
  }else{
     return(
          <div className="app ">
             <LoadingOutlined style={{ fontSize: "5rem" }} />
          </div>
     );
  }
}
 
export default ProfilePage;