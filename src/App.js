import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [post, setPost] = useState({});

  const [postId, setPostId] = useState(1);

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onButtonClick = (event) => {
    setPostId(inputValue);
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [postId]);

  return (
    <div className="App">
      <h1>Post</h1>
      <label>Enter a post id:</label>
      <br />
      <input type="text" onChange={onInputChange} />
      <br />
      <button onClick={onButtonClick}>Get Post</button>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default App;
