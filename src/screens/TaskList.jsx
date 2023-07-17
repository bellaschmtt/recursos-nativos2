import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { RiDeleteBinLine } from 'react-icons/ri';
import { View, TextInput, StyleSheet, Text  } from "react-native";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // const { register, handleSubmit, reset };

  const onSubmit = (data) => {
    const newTask = {
      id: new Date().getTime(),
      task: data.task,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    reset();
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,
    },

    
  });

  return (
    <View style={styles.container}>
      <Text>Task List</Text>
      <View onSubmit={handleSubmit(onSubmit)}>
        <TextInput name="task" ref={register({ required: true })}></TextInput>
        <Button title="Add Task" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};
export default TaskList;


// return (
//   <div>
//     <h1>Task List</h1>
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" name="task" ref={register({ required: true })} />
//       <button type="submit">Add Task</button>
//     </form>
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id}>
//           <span
//             onClick={() => handleToggleComplete(task.id)}
//             style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
//           >
//             {task.task}
//           </span>
//           <button onClick={() => handleDeleteTask(task.id)}>
//             <RiDeleteBinLine />
//           </button>
//         </li>
//       ))}
//     </ul>
//   </div>
// );


// input type="text" name="task" ref={register({ required: true })} 