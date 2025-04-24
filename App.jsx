
import './App.css';
import Counter from './Counter';
import { Demo } from './Demo';
import EmployeeDetails from './EmployeeDetails';
import ClassEvent, { FunctionEvent } from './Events';
import State from './State';
import StudentDetails from './StudentDetails'

function App(){
  return (
    <div className="App">
        <h1>Welcome to ReactJs</h1>
        <State/>
       <Counter/>
    </div>
  );
}

export default App;
{/* <EmployeeDetails id={101} name="Chandrika" dept="IT"/> */}
// <Demo/>
//         <h2>Student Details</h2>
//         <StudentDetails/>
{/* <StudentDetails id={111} name="Pavan" age={8}/>
        <StudentDetails id={112} name="Gopi" age={10}/>
        <StudentDetails id={113} name="Guna" age={9}/>

        <h2>Employee Details</h2>
        <EmployeeDetails id={211} name="Ifti" dept="Testing"/>
        <EmployeeDetails id={212} name="Anul" dept="Developer"/>
        <EmployeeDetails id={213} name="Vishnu" dept="Banking"/> */}