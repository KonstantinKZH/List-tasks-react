import React, { useState } from 'react';
import crossDelete from "../../resources/cross-delete/cross-delete.png";
import './Task.css';


class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.tasks.map(task => (
          <div key={task.id} className='task'>
            <p className='name-task'>{task.nameTask}</p>
            <button onClick={this.props.onClick} className='btn-delete'><img id={task.id} className='icon-delete' src={crossDelete} alt="Иконка крестика удаления" /></button>
          </div>
        ))}
      </div>
    );
  }
};

export default Task;

// const Task = (props) => {

//   const [tasks, setTask] = useState(props);


//   // const deleteTodo = (e) => {
//   //   const crosses = document.getElementsByClassName("icon-delete");
//   //   const cross = e.target;
//   //   if (cross.classList.contains("icon-delete")) {
//   //     for (let i = 0; i < crosses.length; i++) {
//   //       if (crosses[i] === cross) {
//   //         this.setState(this.props.tasks.splice(i, 1));
//   //       };
//   //     };
//   //   };
//   // };

//   const deleteTodo = (e) => {
//     const reducedList = props.tasks.filter(task => Number(e.target.id) !== task.id);
//     setTask(reducedList);
//   };


//   return (
//     <div>
//       {props.tasks.map(task => (
//         <div key={task.id} className='task'>
//           <p className='name-task'>{task.nameTask}</p>
//           <button onClick={deleteTodo} className='btn-delete'><img id={task.id} className='icon-delete' src={crossDelete} alt="Иконка крестика удаления" /></button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Task;