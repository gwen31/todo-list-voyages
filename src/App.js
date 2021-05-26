import ListGard from "./components/Listgard";
import "./app.css";
import ListJura from "./components/Listjura";

function App() {
  return (
    <div className="App">
      <h1>Liste de voyage à faire en France</h1>
      <div className="container">
        <ListGard />
        <ListJura />
      </div>
    </div>
  );
}

export default App;
