import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
    from "../services/auth-thunks";
function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => { 
        dispatch(updateUserThunk(profile)); 
        alert("information saved");};
    useEffect(() => {
        const fetchProfile = async () => {
            try {
              const { payload } = await dispatch(profileThunk());
              setProfile(payload);
            } catch (error) {
              console.error(error);
            }
          };

        fetchProfile();
    }, []);
    return (<div className="row">
        
        <h1>Profile Screen</h1>

        {profile && (
        <div>
            <div className="mt-2">
                <label>First Name</label>
                <input className="form-control" type="text" value={profile.firstName}
                    onChange={(event) => {
                        const newProfile = {
                            ...profile, firstName: event.target.value,
                        };
                        setProfile(newProfile);
                    }} />
            </div>
            <div className="mt-2">
                <label>Last Name</label>
                <input className="form-control" type="text" value={profile.lastName}
                    onChange={(event) => {
                        const newProfile = {
                            ...profile, lastName: event.target.value,
                        };
                        setProfile(newProfile);
                    }} />
            </div>
            <div className="mt-2">
                <label>username</label>
                <input className="form-control" type="text" value={profile.username}
                    onChange={(event) => {
                        const newProfile = {
                            ...profile, username: event.target.value,
                        };
                        setProfile(newProfile);
                    }} />
            </div>
            <div className="mt-2">
                <label>Password</label>
                <input className="form-control" type="text" value={profile.password}
                    onChange={(event) => {
                        const newProfile = {
                            ...profile, password: event.target.value,
                        };
                        setProfile(newProfile);
                    }} />
            </div>
        </div>
        )}
        <button className="btn btn-primary mt-2"
            onClick={() => {
                dispatch(logoutThunk());
                navigate("../login");
            }}>                   Logout</button>
        <button className="btn btn-primary mt-2" onClick={save}>Save  </button>
    </div>);
}
export default ProfileScreen;