import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios
      .get("/documents")
      .then((response) => {
        console.log(response.data);
        setDocuments(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="App container-fluid d-flex justify-content-center align-items-center"
    >
      {documents.map((document) => {
        return (
          <div
            className="card m-3 w"
            key={document.id}
            style={{ width: "200px", minHeight: "300px" }}
          >
            <div className="card-header">{document.header}</div>
            <div className="card-body">
              <div className="card-title">
                <h4>{document.title}</h4>
              </div>
              <div className="card-text">{document.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
