import { useDispatch, useSelector } from "react-redux";
import { Typography } from '@mui/material';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

function ProjectItem({ skill, description, image, keywords }) {
    useDispatch();

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 d-none d-lg-block">
                    <img width={50} className="float-end rounded-circle" src={`${image}`} />
                </div>
                <div className="col-10">
                    <div>
                        <b>{skill}</b> - {keywords}</div>
                    <div>{description}</div>
                </div>
            </div>
        </li>

    );
};
export default ProjectItem;