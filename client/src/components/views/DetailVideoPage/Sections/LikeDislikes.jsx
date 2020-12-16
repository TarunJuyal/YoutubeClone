import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";
import {
  LikeOutlined,
  LikeFilled,
  DislikeOutlined,
  DislikeFilled,
} from "@ant-design/icons";
import Axios from "axios";
import {useSelector} from "react-redux";

function LikeDislikes(props) {
  const user = useSelector((state) => state.user);
  const [Likes, setLikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(null);
  const [Dislikes, setDislikes] = useState(0);
  const [DislikeAction, setDislikeAction] = useState(null);

  let variable = {};

  if (props.video) {
    variable = { videoId: props.videoId, userId: props.userId };
  } else {
    variable = { commentId: props.commentId, userId: props.userId };
  }

  useEffect(() => {
    Axios.post("/api/like/getLikes", variable).then((response) => {
      if (response.data.success) {
        setLikes(response.data.likes.length);
        response.data.likes.map((like) => {
          if (like.userId === props.userId) {
            setLikeAction("liked");
          }
        });
      } else {
        alert("Failed to get likes");
      }
    }, []);

    Axios.post("/api/like/getDislikes", variable).then((response) => {
      if (response.data.success) {
        setDislikes(response.data.dislikes.length);
        response.data.dislikes.map((dislike) => {
          if (dislike.userId === props.userId) {
            setDislikeAction("disliked");
          }
        });
      } else {
        alert("Failed to get dislikes");
      }
    });
  }, []);

  const onLike = () => {
    if(user.userData && !user.userData.isAuth){
      alert("Login first to like");
    }else{
      if (LikeAction === null) {
      Axios.post("/api/like/dolike", variable).then((response) => {
        if (response.data.success) {
          setLikes(Likes + 1);
          setLikeAction("liked");
          if (DislikeAction !== null) {
            setDislikes(Dislikes - 1);
            setDislikeAction(null);
          }
        } else {
          alert("Failed to increase like");
        }
      });
    } else {
      Axios.post("/api/like/unlike", variable).then((response) => {
        if (response.data.success) {
          setLikes(Likes - 1);
          setLikeAction(null);
        } else {
          alert("Failed to decrease like");
        }
      });
    }
    }
  };

  const onDislike = () => {
    if(user.userData && !user.userData.isAuth){
      alert("Login first to like");
    }else{
    if (DislikeAction === null) {
      Axios.post("/api/like/dodislike", variable).then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes + 1);
          setDislikeAction("disliked");
          if (LikeAction !== null) {
            setLikes(Likes - 1);
            setLikeAction(null);
          }
        } else {
          alert("Failed to increase dislike");
        }
      });
    } else {
      Axios.post("/api/like/undislike", variable).then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes - 1);
          setDislikeAction(null);
        } else {
          alert("Failed to decrease dislike");
        }
      });
    }
  }
  };

  return (
    <React.Fragment>
      <span key="comment-basic-like" onClick={onLike}>
        <Tooltip title="Like">
          {LikeAction === "liked" ? (
            <LikeFilled style={{ fontSize: "1rem" }} />
          ) : (
            <LikeOutlined style={{ fontSize: "1rem" }} />
          )}
        </Tooltip>
        <span style={{ paddingLeft: "8px", cursor: "auto" }}>{Likes}</span>
      </span>
      &nbsp;&nbsp;
      <span key="comment-basic-dislike" onClick={onDislike}>
        <Tooltip title="Dislike">
          {DislikeAction === "disliked" ? (
            <DislikeFilled style={{ fontSize: "1rem" }} />
          ) : (
            <DislikeOutlined style={{ fontSize: "1rem" }} />
          )}
        </Tooltip>
        <span style={{ paddingLeft: "8px", cursor: "auto" }}>{Dislikes}</span>
      </span>
    </React.Fragment>
  );
}

export default LikeDislikes;
