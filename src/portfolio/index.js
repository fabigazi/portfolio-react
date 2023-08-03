import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import { Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../tuiter/reducers/auth-reducer";
import ProfileScreen from "./profile-screen";
import commentsReducer from "./reducers/comments-reducer";
import CommentsList from "./comments";
import SkillsScreen from "./skills-screen";
import EducationScreen from "./education-screen";
import ProjectScreen from "./project-screen";
import WorkScreen from "./work-screen";

const store = configureStore(
   { reducer: {user: authReducer, comments: commentsReducer} }); // go to tuiter index to figure out how to use this

function Portfolio() {
   return (
      <Provider store={store}>
         <div>
            <Nav />
            <div className="row">
               <div className="col-12 min-width-500 d-xl-none">
                  <Routes>
                     <Route path="/" element={<Navigate to="profile" />} />
                     
                     <Route path="/profile" element={<ProfileScreen />} />
                     <Route path="/skills" element={<SkillsScreen/>}/>
                     <Route path="/education" element={<EducationScreen/>}/>
                     <Route path="/projects" element={<ProjectScreen/>}/>
                     <Route path="/work" element={<WorkScreen/>}/>
                  </Routes>
               </div>

               <div className="col-8 min-width-500 d-none d-xl-block">
                  <Routes>
                     <Route path="/" element={<Navigate to="profile" />} />
                     
                     <Route path="/profile" element={<ProfileScreen />} />
                     <Route path="/skills" element={<SkillsScreen/>}/>
                     <Route path="/education" element={<EducationScreen/>}/>
                     <Route path="/projects" element={<ProjectScreen/>}/>
                     <Route path="/work" element={<WorkScreen/>}/>
                  </Routes>
               </div>
               <div className="col-4 d-none d-xl-block">
                  <div className="min-width-400">
                     <CommentsList />
                  </div>
               </div>
            </div>
         </div>
         </Provider>
   );
}
export default Portfolio;