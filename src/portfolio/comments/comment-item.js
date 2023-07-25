import { useDispatch, useSelector } from "react-redux";
import { Typography } from '@mui/material';
import 'bootstrap-icons/font/bootstrap-icons.css';

function CommentItem({ comment, author, date}) {
    useDispatch();

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                </div>
                <div className="col-10">
                    <div>
                        <Typography variant="body1">
                            {author} -
                            {date}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body2">{comment}</Typography>
                    </div>
                </div>
            </div>
        </li>

    );
};
export default CommentItem;
