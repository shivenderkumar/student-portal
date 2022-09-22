import React from "react";
import "../styles/AddNewStudentComp.css"

function AddNewStudentComp(props) {
    return (
        <button id="button-addstudent" type="button" value="Add Student" onClick={props.onAdd()} >Add Student</button>
    );

}

export default AddNewStudentComp;