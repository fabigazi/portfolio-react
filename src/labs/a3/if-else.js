import BooleanVariables from "./boolean-variables";


function IfElse() {
    console.log('If else');
    if (BooleanVariables.true1) {
        console.log('true1');
    }

    if (!BooleanVariables.false1) {
        console.log('!false1');
    } else {
        console.log('false1');
    }
    return (
        <div>
            <h2>If Else</h2>
            {BooleanVariables.true1 + "" && <p>true1</p>}
            {!BooleanVariables.false1 + "" ? <p>!false1</p> : <p>false1</p>}
        </div>
    );

}
export default IfElse