import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findCommentsThunk } from "../services/comments-thunks";
import SkillItem from "./skill-item";
import skillsData from "./skills.json";

const SkillList = () => {
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
        
        skillsData.map(skill =>
          <SkillItem
            key={skill._id} skill={skill.skill} 
            description={skill.description} image={skill.image}
            keywords={skill.keywords} />)
      }
    </ul>
  );
};
export default SkillList;