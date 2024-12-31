
// import { useState } from "react";
// import Task from "./Task";

// const Home = () => {
//   const [Tasks, setTasks] = useState([]);
//   const [Tittle, setTittle] = useState("");
//   const [Description, setDescription] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     // If we are editing a task, update it; otherwise, add a new task
//     if (editIndex !== null) {
//       const updatedTasks = [...Tasks];
//       updatedTasks[editIndex] = { Tittle, Description };
//       setTasks(updatedTasks);
//       setEditIndex(null); // Reset the edit mode
//     } else {
//       setTasks([...Tasks, { Tittle, Description }]);
//     }

//     // Clear the input fields after submission
//     setTittle("");
//     setDescription("");
//   };

//   const Remove = (index) => {
//     const filteredArray = Tasks.filter((val, i) => i !== index);
//     setTasks(filteredArray);
//   };

//   const startEdit = (index) => {
//     setEditIndex(index);
//     setTittle(Tasks[index].Tittle);
//     setDescription(Tasks[index].Description);
//   };

//   return (
//     <div className="container">
//       <h1>Daily Tasks</h1>
//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           placeholder="Enter Title"
//           value={Tittle}
//           onChange={(e) => setTittle(e.target.value)}
//         />
//         <textarea
//           placeholder="Enter Description"
//           value={Description}
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>
//         <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
//       </form>

//       {Tasks.map((item, index) => (
//         <Task
//           key={index}
//           Tittle={item.Tittle}
//           Description={item.Description}
//           Remove={Remove}
//           index={index}
//           startEdit={startEdit}
//         />
//       ))}
//     </div>
//   );
// };

// export default Home;
















import Task from "./Task"
import { useEffect, useState } from "react";






const Home = () => {
  const initialArray = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")): [];

    const[Tasks, setTasks] = useState(initialArray);
    const[Tittle, setTittle] = useState("");
    const[Description, setDescription] = useState("");
    

    


    const submitHandler = (e)=>{
      e.preventDefault();
      setTasks([...Tasks, {Tittle, Description}])
      setTittle("");
    setDescription("");
    }

    const Remove =(index)=>{
      const filteredArray = Tasks.filter((val,i)=>{
        return i !== index;
      });
      console.log(filteredArray);
      setTasks(filteredArray);
    }



    
  
    useEffect (()=>{
      localStorage.setItem("tasks", JSON.stringify(Tasks));

    },[Tasks]);

  return (
    <div className="container">
      <h1>Daily Tasks</h1>
      <form onSubmit={submitHandler} >
        <input type="text" placeholder="Enter Tittle" value={Tittle} onChange={(e)=>setTittle(e.target.value)}required/>
        <textarea placeholder="Enter description" value={Description} onChange={(e)=>setDescription(e.target.value)} required
        ></textarea>
        <button type="submit">Add</button>
      </form>

      {Tasks.map((item,index)=>(
        <Task key={index} Tittle={item.Tittle} Description= {item.Description} Remove = {Remove} index = {index}   />
      ))}

      

     
    
    </div>
  )
}

export default Home


































// const Home = () => {
//   return (
//     <div>
//       Home page
//     </div>
//   )
// }

// export default Home
