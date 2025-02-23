import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dataInfo, setDataInfo] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/studentsInfo")
      .then(res => res.json())
      .then(data => {
        setDataInfo(data)
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);



  return (
    <>
      <h1>Data Server Management</h1>
      <h2>Total Students: {dataInfo.length}</h2>
      <div  style={{display: 'flex', gap:'20px', justifyContent:'center', alignItems:'center'	}}>
        {
          dataInfo?.map((student, index) => (
            <div key={index} className='flex'>
              <h3>Student Name: {student.name}</h3>
              <h3>Roll No: {student.roll}</h3>
              <h4>Gender: {student.gender}</h4>
              <h3>Age: {student.age}</h3>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
