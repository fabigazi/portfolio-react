
import { useDispatch, useSelector } from "react-redux";
import CommentItem from "./comment-item";
import { findComments } from "../services/comments-service";
import React, { useEffect, useState } from "react";

const CommentList = () => {
  const [comments, setComments, loading] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await findComments();
      setComments(comments);
    };
    fetchComments();
  }, []);

  return (
    <ul className="list-group">
      {loading ? (
        <li className="list-group-item">Loading...</li>
      ) : (
        comments.map(comment => 
          <CommentItem
            key={comment._id}
            comment={comment.comment}
            date={comment.date}
            author={comment.author}
          />
        )
      )}
    </ul>
  );
}

export default CommentList;