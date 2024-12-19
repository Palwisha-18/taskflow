import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), name: task }]);
      setTask(""); // Clear input
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>TaskFlow</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          Add Task
        </button>
      </div>
      <div style={styles.taskList}>
        <AnimatePresence>
          {tasks.map((t) => (
            <motion.div
              key={t.id}
              style={styles.task}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <p>{t.name}</p>
              <button onClick={() => removeTask(t.id)} style={styles.delete}>
                ✕
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  taskList: {
    marginTop: "20px",
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    margin: "5px 0",
    background: "#f9f9f9",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  delete: {
    background: "transparent",
    border: "none",
    color: "#ff4d4d",
    cursor: "pointer",
    fontSize: "18px",
  },
};

export default App;
