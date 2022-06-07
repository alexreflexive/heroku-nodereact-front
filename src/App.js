import "./App.css";

function App() {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="App container-fluid d-flex justify-content-center align-items-center"
    >
      <div className="card m-3 w" style={{ width: "200px" }}>
        <div className="card-header">En-tête</div>
        <div className="card-body">
          <div className="card-title">
            <h4>Titre</h4>
          </div>
          <div className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
