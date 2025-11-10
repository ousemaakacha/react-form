import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const art = [
    { id: 1, title: "Comics" },
    { id: 2, title: "Fantasy" },
    { id: 3, title: "Thriller" },
  ];
  const [articles, setArticles] = useState(art);
  return (
    <>
      <div>
        <h1>REACT BLOG</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default App;
