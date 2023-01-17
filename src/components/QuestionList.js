import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([])

    useEffect(() => {
      fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
    }, [])

    const questionList = questions.map((question) => {
      return (
      <ul key={question.id}>
        <QuestionItem key={question.id} question={question} />
      </ul>)
    })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionList}
      </ul>
    </section>
  );
}

export default QuestionList;
