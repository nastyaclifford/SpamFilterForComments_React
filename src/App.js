import { useState } from "react";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const [inputText, setInputText] = useState("");

  const checkSpam = (text) => {
    const lowerCaseText = text.toLowerCase();
    const filteredText = lowerCaseText.replace(/viagra|xxx/g, "***");
    return filteredText;
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCommentsSubmit = (e) => {
    e.preventDefault();
    const filteredText = checkSpam(inputText);
    setComments([filteredText, ...comments]);
    setInputText("");
  };

  return (
    <div className="App">
      <header></header>
      <main>
        <div className="container">
          <h1 className="title">Forum with comments</h1>
          <div className="comments-section">
            <div className="comments-section__form">
              <div className="form-comment">
                <label for="comment" className="comment__title">
                  Please leave your comment:
                </label>
                <input
                  className="comment__textarea"
                  name="comment"
                  id="comment"
                  value={inputText}
                  onChange={handleChange}
                ></input>
              </div>
              <button
                onClick={handleCommentsSubmit}
                id="button"
                className="form__submit-button"
              >
                Submit
              </button>
            </div>
            <div className="comments-section__chat">
              <p className="chat__title">Comments</p>
              <div className="comments-display">
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className={index === 0 ? "comment_new" : "comment"}
                  >
                    {comment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
