import React, { useState } from "react";
import { Button, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import Axios from "axios";
import { useSelector } from "react-redux";
import SingleComment from "./SingleComment";
import ReplyComment from "./ReplyComment";

const { TextArea } = Input;

function Comments(props) {
  const user = useSelector((state) => state.user);
  const [Comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(user.userData._id){
      if(Comment){
        const commentVariable = {
      content: Comment,
      writer: user.userData._id,
      postId: props.postId,
    };
    Axios.post("/api/comment/saveComment", commentVariable).then((response) => {
      if (response.data.success) {
        setComment("");
        props.refreshFunction(response.data.result);
      } else {
        alert("Failed to add comment");
      }
    });
      }else{
        alert("Comment can't be empty")
      }
    }else{
      alert("login first")
    }
  };

  return (
    <div>
      <br />
      <p>Replies</p>
      <hr />
      {props.CommentList &&
        props.CommentList.map(
          (comment, index) =>
            !comment.responseTo && (
              <React.Fragment>
                <SingleComment
                  comment={comment}
                  postId={props.postId}
                  refreshFunction={props.refreshFunction}
                />
                <ReplyComment
                  CommentList={props.CommentList}
                  postId={props.postId}
                  refreshFunction={props.refreshFunction}
                  parentCommentId={comment._id}
                />
              </React.Fragment>
            )
        )}
      <form
        style={{ display: "flex", borderRadius: "5px" }}
        onSubmit={onSubmit}
      >
        <TextArea
          style={{ width: "100%", borderRadius: "5px" }}
          onChange={handleChange}
          value={Comment}
          placeholder="Add a comment..."
          onPressEnter={onSubmit}
        />
        <br />
        <Button style={{ width: "20%", height: "52px" }} onClick={onSubmit}>
          <SendOutlined />
        </Button>
      </form>
    </div>
  );
}

export default Comments;
