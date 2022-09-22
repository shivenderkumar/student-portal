import "../styles/Student.css"

function Student(props) {

    return (
        <div className="student" >
            
            {props.s.name} <br /><br />
            {props.s.email} <br /><br />
            {props.s.gender} <br /><br />
            {props.s.phonenumber} <br /><br />
            {props.s.password}
        </div>
    );
}

export default Student;