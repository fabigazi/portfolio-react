import SkillList from "./skills";

function EducationScreen() {
    return (
        <div className="row">

            <h1>Education Screen</h1>
            <div >
                <div >
                    <h3>Fabian Gaziano</h3>

                </div>
                <h3>Worchester Polytechnic Institute</h3>


                
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

            </div>
        </div>
    );
}
export default EducationScreen;