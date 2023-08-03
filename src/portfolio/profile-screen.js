
function ProfileScreen() {
    return (
        <div className="row">

            <h1>Profile Screen</h1>

            <div >
                <div >
                    <h3>Fabian Gaziano</h3>

                </div>
                <h3>Resources</h3>
                <a href="https://www.linkedin.com/in/fabian-gaziano/">
                <div className="row">
                    <div className="col-1">
                        <img width={40} className="float-end rounded-circle" src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" />
                    </div>
                    <div className="col-10">
                        <div>
                            <b>LinkedIn</b> - Fabian Gaziano
                        </div>
                    </div>
                </div>
                </a>
                <div className="row">
                    <div className="col-1">
                        <img width={30} className="float-end rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" />
                    </div>
                    <div className="col-10">
                        <div>
                            <b>GitHub</b> - <a href="https://github.com/fabigazi">fabigazi</a>
                        </div>
                    </div>
                </div>


                <h3>Bio</h3>
                <p>Fabian is a prospective Software Engineer with 7+ years of experience learning cutting 
                    edge technologies and applying them to a wide variety of applications. With his positive 
                    outlook, Fabian looks to organize and tackle a wide variety of obstacles.
                    </p>
                <h3>
                    Personal Info
                </h3>
                <p>
                It is easier to make a list of things that I don't like. I try to find joy in almost
                 every activity. I have been fortunate to try many things and therefore enjoy many outdoor
                  activities such as running, soccer, skiing, snowboarding and many others. I also enjoy
                   mental challenges like piano, rubiks cubes, sudoku and riddles. Finally, I enjoy keeping 
                   my computer skills sharp with personal projects such as game making, Convenience 
                   applications, and IT and computer organization.
                </p>
            </div>

        </div>
    );
}
export default ProfileScreen;