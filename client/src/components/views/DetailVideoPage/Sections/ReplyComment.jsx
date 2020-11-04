import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";

function ReplyComment(props) {
  const [ChildCommentNumber, setChildCommentNumber] = useState(0);
  const [OpenReplyComments, setOpenReplyComments] = useState(false);

  useEffect(() => {
    let commentNumber = 0;
    props.CommentList.map((comment) => {
      if (comment.responseTo === props.parentCommentId) {
        commentNumber++;
      }
    });
    setChildCommentNumber(commentNumber);
  }, [props.CommentList, props.parentCommentId]);

  const renderReplyComment = (parentCommentId) =>
    props.CommentList.map((comment, index) => (
      <React.Fragment>
        {comment.responseTo === parentCommentId && (
          <div style={{ marginLeft: "50px", width: "80%" }}>
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
          </div>
        )}
      </React.Fragment>
    ));

  const handleChange = () => {
    setOpenReplyComments(!OpenReplyComments);
  };

  return (
    <div>
      {ChildCommentNumber > 0 && (
        <a onClick={handleChange}>
          <p style={{ fontSize: "14px", margin: 0, color: "gray" }}>
            View {ChildCommentNumber} more comment(s)
          </p>
        </a>
      )}
      {OpenReplyComments && renderReplyComment(props.parentCommentId)}
    </div>
  );
}

export default ReplyComment;
