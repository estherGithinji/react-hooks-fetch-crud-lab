import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [addedQuestion, setAddedQuestion] = useState([])

  function handleAddQuestion(newQuestion) {
    setAddedQuestion([...addedQuestion, newQuestion])
    console.log("added to list")
  }
 
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={handleAddQuestion}/> : <QuestionList/>}
    </main>
  );
}

export default App;
