import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentItem from "./comment-item";
import { findCommentsThunk } from "../services/comments-thunks";
import AddComment from "./add-comment";

const CommentsList = () => {
  let { comments: comments, loading } = useSelector(state => state.comments)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findCommentsThunk())
  }, [])

  return (
    <ul className="list-group">
      {loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }
      <AddComment />
      {
        
        comments.toReversed().map(comment =>
          <CommentItem
            key={comment._id} comment={comment.comment} 
            author={comment.author} date={comment.date} />)
      }
    </ul>
  );
};
export default CommentsList;