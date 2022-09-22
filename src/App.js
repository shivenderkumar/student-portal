import './styles/App.css';

import { useState } from 'react';
import AddNewStudentComp from './components/AddNewStudentComp';
import FormComp from './components/FormComp';
import StudentListComp from './components/StudentListComp';
import BlankComp from './components/BlankComp';
import Student from './components/Student';
import SearchComp from './components/SearchComp';

function App() {
  const [studentList, setStudentList] = useState([]);
  const [display, setDisplay] = useState("blank");
  const [indexNo, setIndexNo] = useState(null);
  const [query, setQuery] = useState("");

  const onStudentAddHandler = (student) => {
    console.log("In App student : " + student.name);
//    console.log("In App student List : " + studentList[3].name);
    setStudentList(studentList => {
      return [
        ...studentList,
        student
      ];
    });
  }

  function onAddHandler() {
    return () => {
      setDisplay("form");
    }
  }

  const onStudentItemClickHandler = (index)=>{
    console.log("in App comp index : "+index);
    setDisplay("student");
    setIndexNo(index);
  }

  return (
    <div className="app-container">
      <div className="app-left-pannel">
        <SearchComp  />
        <StudentListComp list={studentList} onStudentItemClick={onStudentItemClickHandler} />
      </div>
      <div className="app-right-pannel">
        <div className="app-right-top-pannel">
          <AddNewStudentComp onAdd={onAddHandler} />
        </div>
        <div className="app-right-bottom-pannel">
          {
            (display == "blank") ? <BlankComp /> 
            : ((display == "form") ? <FormComp onStudentAdd={onStudentAddHandler} />
              : ((indexNo != null) ? <Student s={{...studentList[indexNo]}} /> : <BlankComp />))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
