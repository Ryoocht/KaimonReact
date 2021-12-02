import '../style/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopPage from "./store/TopPage"
import StorePage from './store/StorePage';
import ProductPage from './product/ProductPage';
import AdminPage from '../containers/admin/AdminPage';
import UserPage from './user/UserPage';
import StoreManagerPage from './store/StoreManagerPage';

function App() {
  return (
    <Router basename="/kaimon">
        <Route exact path="/" component={TopPage} />
        <Route exact path="/store" component={StorePage} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/storeManager" component={StoreManagerPage} />
    </Router>
  );
}

export default App;
