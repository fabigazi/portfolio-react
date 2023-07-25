import React, { useState } from "react";
import { createCommentThunk } from "../services/comments-thunks";
import { useDispatch } from "react-redux";

const AddComment = () => {
    let [authorInput, setAuthorComment] = useState('');
    let [addComment, setAddComment] = useState('');
    const dispatch = useDispatch();
    const commentClickHandler = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        const newComment = {
            author: authorInput,
            date: today,
            comment: addComment
        }
        dispatch(createCommentThunk(newComment));
        setAddComment("");
    }
    return (
        // <i class="fa-regular fa-image"></i>
        //      <i class="fa-light fa-gif"></i>
        <div className="row">
            <div className="col-10">
                <textarea value={authorInput} placeholder="Anonymos"
                    className="form-control border-1"
                    onChange={(event) => setAuthorComment(event.target.value)}>
                </textarea> <br/>
                <textarea value={addComment} placeholder="Want to add a comment?"
                    className="form-control border-1"
                    onChange={(event) => setAddComment(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={commentClickHandler}>
                        Comment
                    </button>
                    {/* <div className="text-primary fs-2">
                        <AiOutlinePicture className="me-3" />
                        <HiOutlineGift className="me-3" />
                        <MdFormatListBulleted className="me-3" />
                        <BsEmojiSmile className="me-3" />
                        <TbCalendarStats className="me-3" />
                        <HiOutlineLocationMarker className="me-3" />
                        <BiBold className="me-3" />
                        <BiItalic className="me-3" />
                    </div> */}
                </div>
            </div>
            <div className="col-12"><hr /></div>
        </div>
    );
}
export default AddComment;