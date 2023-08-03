import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findCommentsThunk } from "../services/comments-thunks";
import ProjectItem from "./project-item";
import projectData from "./projects.json";

const ProjectList = () => {
  let { skills: skills, loading } = useSelector(state => state.comments)
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
      {
        
        projectData.map(skill =>
          <ProjectItem
            key={skill._id} skill={skill.skill} 
            description={skill.description} image={skill.image}
            keywords={skill.keywords} />)
      }
    </ul>
  );
};
export default ProjectList;