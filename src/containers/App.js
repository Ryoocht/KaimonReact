import '../style/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopPage from "./store/TopPage"
import StorePage from './store/StorePage';

function App() {
  return (
    <Router basename="/kaimon">
        <Route exact path="/" component={TopPage} />
        <Route exact path="/stores" component={StorePage}/>
    </Router>
  );
}

export default App;
