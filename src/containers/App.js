import '../style/App.css';
import Typography from "@mui/material/Typography"
import TopPage from "./store/TopPage"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Kaimon</Typography>
        <hr/>
        <TopPage />
      </header>
    </div>
  );
}

export default App;
