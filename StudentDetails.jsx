import React from "react";
import { PropsDrillDemo } from "./PropsDrillDemo";
import { StudentArray } from "./StudentArray";

export default function StudentDetails(props){
    
    
    return <div>
       {/* {StudentArray.map(madhu => <h2>{madhu.id + " : " + madhu.name + " : " + madhu.age}</h2>)} */}

        {/* ******************************** */}
       
       {StudentArray.map(values => {
        return <ul>
            <li>{values.id}</li>
            <li>{values.name}</li>
            <li>{values.age}</li>
            </ul>
       })}
    </div>
}


// const {id,name,age} = props
    // console.log(StudentArray);
    // console.log(StudentArray[0].name);
    
    // function studentDataDisplay(data){
    //     return <ul>
    //         <li>{data.id}</li>
    //         <li>{data.name}</li>
    //         <li>{data.age}</li>
    //     </ul>
    // }

{/* <ul>
<li>Id: {StudentArray[0].id}</li>
<li>Name: {StudentArray[0].name}</li>
<li>Age: {StudentArray[0].age}</li>
</ul>
<ul>
<li>Id: {StudentArray[1].id}</li>
<li>Name: {StudentArray[1].name}</li>
<li>Age: {StudentArray[1].age}</li>
</ul>
<ul>
<li>Id: {StudentArray[2].id}</li>
<li>Name: {StudentArray[2].name}</li>
<li>Age: {StudentArray[2].age}</li>
</ul>
<ul>
<li>Id: {StudentArray[3].id}</li>
<li>Name: {StudentArray[3].name}</li>
<li>Age: {StudentArray[3].age}</li>
</ul> */}
// export default StudentDetails