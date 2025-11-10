import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const art = [
    { id: 1, title: "Comics" },
    { id: 2, title: "Fantasy" },
    { id: 3, title: "Thriller" },
  ];
  const [newTitle, setNewTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }

  const [articles, setArticles] = useState(art);
  return (
    <>
      <div>
        <h1>REACT BLOG</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titolo articolo"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button>Add</button>
        </form>

        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
