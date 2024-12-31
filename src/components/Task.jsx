
const Task = ({Tittle, Description, index, Remove}) => {

    


  return (
    <div className="task">
      <div>
        <p>{Tittle}</p>
        <span>{Description}</span>
      </div>
      <button onClick={()=>Remove(index)}>Delete</button>
      <button>Edit</button>
    </div>
  )
}

export default Task





// const Task = ({ Tittle, Description, index, Remove, startEdit }) => {
  // return (
  //   <div className="task">
  //     <div>
  //       <p>{Tittle}</p>
  //       <span>{Description}</span>
  //     </div>
  //     <button onClick={() => Remove(index)}>Delete</button>
  //     <button onClick={() => startEdit(index)}>Edit</button>
  //   </div>
  // );
// };

// export default Task;






































// const Contact = () => {
//   return (
//     <div>
//       Contact page
//     </div>
//   )
// }

// export default Contact
