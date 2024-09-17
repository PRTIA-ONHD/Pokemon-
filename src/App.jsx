import "./App.css";
import { BrowserRouter , Routes,  Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store/Store';

import Header from "./components/Header/Header";
import NavBar from "./components/navBar/navBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <NavBar/>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element= {<Home/> }/>
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
