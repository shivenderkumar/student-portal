import "../styles/FormComp.css"
import "../styles/FormInputItemComp.css"

import FormInputItemComp from "./FormInputItemComp";
import { useState } from "react";

function FormComp(props) {
    const [studentInfo, setStudentInfo] = useState({
        name: "",
        email: "",
        gender: "Male",
        phonenumber: "",
        password: ""
    });

    const [errObj, setErrObj] = useState({});

    const validtor = {
        name: (key, val) => {
            if (/[0-9]/.test(val)) {
                setErrObj({
                    ...errObj,
                    [key]: "Name should contain alphabets only"
                });
            }
            else {
                setErrObj({
                    ...errObj,
                    [key]: null
                });
            }
        },
        email: (key, val) => {
            let atrate = val.indexOf("@");
            let dot = val.indexOf(".");
            console.log(val, atrate, dot, val.length);
            if ((atrate < 1) || (dot <= (atrate + 2)) || (dot == (val.length - 1))) {
                setErrObj({
                    ...errObj,
                    [key]: "Email is invalid"
                });
            }
            else {
                setErrObj({
                    ...errObj,
                    [key]: null
                });
            }
            console.log(errObj);
        },
        phonenumber: (key, val) => {
            if ((/[0-9]/.test(val)) && val.length == 10) {
                setErrObj({
                    ...errObj,
                    [key]: null
                });
            }
            else {
                setErrObj({
                    ...errObj,
                    [key]: "Phone Number must be numeric of length 10"
                });
            }
        }
    }

    const onInputHandler = (key) => {
        return (e) => {
            setStudentInfo({
                ...studentInfo,
                [key]: e.target.value
            });
            validtor[key] && validtor[key](key, e.target.value);
        }
    }

    function onFormButtonClik() {
        let flag = false;
        return (
            (e) => {
                e.preventDefault();
                let str = "Student Added : ";
                if ((errObj.name != null) || (errObj.email != null) || (errObj.phonenumber != null)) {
                    str = "Enter correct details"
                }
                else if ((studentInfo.name.length < 1) || (studentInfo.email.length < 1) || (studentInfo.phonenumber.length < 1) || (studentInfo.password.length < 1)) {
                    str = "Please fill the form"
                }
                else {
                    str = studentInfo.name + " " + str;
                    flag = true;
                }
                if (flag) {
                    alert(str);
                    props.onStudentAdd(studentInfo);
                    // setStudentInfo({
                    //     name: "",
                    //     email: "",
                    //     gender: "Male",
                    //     phonenumber: "",
                    //     password: ""
                    // });
                }
                else {
                    alert(str);
                }
                //setStudentInfo({});
            }
        );
    }

    return (
        <div className="form-container">
            <h3>Fill the student details</h3>
            <form className="form">
                <div className="form-input-item-container">
                    <div>
                        <label for="name">Name</label>
                    </div>
                    <div>
                        <input type="text" id="name" value={studentInfo.name}
                            onChange={onInputHandler("name")} />
                    </div>
                    <div>
                        {validtor.name && <div className="err-object">{errObj.name}</div>}
                    </div>
                </div>
                <div className="form-input-item-container">
                    <div>
                        <label for="email">Email</label>
                    </div>
                    <div>
                        <input type="email" id="email" value={studentInfo.email}
                            onChange={onInputHandler("email")} />
                    </div>
                    <div>
                        {validtor.email && <div className="err-object">{errObj.email}</div>}
                    </div>
                </div>
                <div className="form-input-item-container">
                    <div>
                        <label for="name">gender</label> &nbsp;
                        <select value={studentInfo.gender} onChange={onInputHandler("gender")}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="form-input-item-container">
                    <div>
                        <label for="phonenumber">Phone Number</label>
                    </div>
                    <div>
                        <input type="tel" id="phonenumber" value={studentInfo.phonenumber}
                            onChange={onInputHandler("phonenumber")} />
                    </div>
                    <div>
                        {validtor.phonenumber && <div className="err-object">{errObj.phonenumber}</div>}
                    </div>
                </div>
                <div className="form-input-item-container">
                    <div>
                        <label for="password">Password</label>
                    </div>
                    <div>
                        <input type="password" id="password" value={studentInfo.password}
                            onChange={onInputHandler("password")} />
                    </div>
                </div>
                <div className="add-button-container">
                    <button type="submit" id="add-button" onClick={onFormButtonClik()}>Add</button>
                </div>
            </form>
        </div>
    );
}

export default FormComp;