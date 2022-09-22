import "../styles/StudentListComp.css"

import Student from "./Student";

function StudentListComp(props) {

    console.log("in SListComp list length : " + props.list.length);

    function onClickHandle(index) {
        return () => {
            props.onStudentItemClick(index);
        }
    }

    return (
        <>
            <h3 id="h3-list" >Student List :</h3>
            <div className="student-list-comp">
                {
                    props.list.map((student, index) => {
                        return < div key={index} onClick={onClickHandle(index)}>
                            <Student key={index} s={student} />
                        </div>
                    })
                }
            </div>
        </>
    );
}

export default StudentListComp;
