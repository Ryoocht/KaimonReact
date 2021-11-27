import '../style/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopPage from "./store/TopPage"
import StorePage from './store/StorePage';
import ProductPage from './store/ProductPage';
import AdminPage from './store/AdminPage';

function App() {
  return (
    <Router basename="/kaimon">
        <Route exact path="/" component={TopPage} />
        <Route exact path="/store" component={StorePage} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/admin" component={AdminPage} />
    </Router>
  );
}

export default App;
