import HomePage from './page/homepage/homepage.js';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import store from './store/store.js';
import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    </Provider>
  );
}
