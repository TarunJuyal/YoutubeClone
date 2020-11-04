import React, { useState } from "react";
import { Comment, Avatar, Button, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Axios from "axios";
import LikeDislikes from "./LikeDislikes";

const { TextArea } = Input;

function SingleComment(props) {
  const user = useSelector((state) => state.user);
  const [CommentValue, setCommentValue] = useState("");
  const [OpenReply, setOpenReply] = useState(false);

  const openReply = () => {
    setOpenReply(!OpenReply);
  };
  const actions = [
    <LikeDislikes
      comment
      commentId={props.comment._id}
      userId={localStorage.getItem("userId")}
    />,
    <span onClick={openReply} key="comment-basic-reply-to">
      Reply to{" "}
      {`${props.comment.writer.firstName} ${props.comment.writer.lastName}`}
    </span>,
  ];

  const handleChange = (e) => {
    setCommentValue(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(user.userData && user.userData.isAuth){
    if(CommentValue){
      const commentVariable = {
      content: CommentValue,
      writer: user.userData._id,
      postId: props.postId,
      responseTo: props.comment._id,
    };
    Axios.post("/api/comment/saveComment", commentVariable).then((response) => {
      if (response.data.success) {
        setCommentValue("");
        setOpenReply(!OpenReply);
        props.refreshFunction(response.data.result);
      } else {
        alert("Failed to add reply");
      }
    });
    }else{
      alert("Comment can't be empty")
    }
  }else{
    alert("Login First");
  }
  };

  return (
    <div>
      <Comment
        actions={actions}
        author={`${props.comment.writer.firstName} ${props.comment.writer.lastName}`}
        avatar={<Avatar src={props.comment.writer.image} alt="image" />}
        content={<p>{props.comment.content}</p>}
      ></Comment>

      {OpenReply && (
        <form style={{ display: "flex" }} onSubmit={onSubmit}>
          <TextArea
            style={{ width: "100%", borderRadius: "5px" }}
            onChange={handleChange}
            value={CommentValue}
            placeholder="Add a reply.."
            onPressEnter={onSubmit}
          />
          <br />
          <Button style={{ width: "20%", height: "52px" }} onClick={onSubmit}>
            {" "}
            <SendOutlined />
          </Button>
        </form>
      )}
    </div>
  );
}

export default SingleComment;
