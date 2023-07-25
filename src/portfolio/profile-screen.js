
function ProfileScreen() {
    return (<div className="row">

        <h1>Profile Screen</h1>

        <div>
            <div className="mt-2">
                <label>First Name</label>
                <input className="form-control" type="text" value={"Fabian"} />
            </div>
            <div className="mt-2">
                <label>Last Name</label>
                <input className="form-control" type="text" value={"Gaziano"} />
            </div>
        </div>

    </div>);
}
export default ProfileScreen;