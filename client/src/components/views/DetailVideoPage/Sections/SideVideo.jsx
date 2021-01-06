import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Static_Content } from "../../../config";

function SideVideo() {
  const [SideVideos, setSideVideos] = useState([]);

  useEffect(() => {
    Axios.get("/api/video/getVideos").then((response) => {
      if (response.data.success) {
        setSideVideos(response.data.videos);
      } else {
        alert("Failed to get videos");
      }
    });
  }, []);

  const sideVideoItems = SideVideos.map((video, index) => {
    let minutes = Math.floor(video.duration / 60);
    let seconds = Math.floor(video.duration - minutes * 60);
    return (
      <div
        key={index}
        style={{ display: "flex", marginTop: "1rem", padding: "0 1rem" }}
      >
        <div style={{ width: "45%", marginRight: "1rem" ,position: "relative"}}>
          <a href={`/video/${video._id}`} style={{ color: "gray" }}>
            <img
              style={{ width: "100%" }}
              src={`${Static_Content}${video.thumbnail}`}
              alt="thumbnail"
            ></img>
            <div
              className="duration"
              style={{
                width: "2rem",
                bottom: 15,
                right: 0,
                margin: "3px",
                position: "absolute",
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
          </a>
        </div>
        <div style={{ width: "50%" }}>
          <a href={`/video/${video._id}`} style={{ color: "gray" }}>
            <span style={{ fontSize: "1em", color: "black" }}>
              {video.title}
            </span>
            <br />
            <span>{`${video.writer.firstName} ${video.writer.lastName}`}</span>
            <br />
            <span>{video.views} views</span>
            <br />
          </a>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div style={{ marginTop: "3rem" }}></div>
      {sideVideoItems}
    </React.Fragment>
  );
}

export default SideVideo;
