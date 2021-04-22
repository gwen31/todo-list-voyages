import ListGard from "./components/Listgard";
import "./app.css";

function App() {
  return (
    <div className="App">
      <h1>Liste de voyage à faire en France</h1>
      <div className="card">
        <h2>Le Gard</h2>
        <ListGard />
      </div>
    </div>
  );
}

export default App;
