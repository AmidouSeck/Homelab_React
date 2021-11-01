import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NavBar from "./Components/NavBar/NavBar";
import Analyse from "./Components/Analyse/Analyse";
import SignUp from "./Components/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";
import Panel from "./Components/Panel/Panel";
function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login}/>
      <Route path="/analyse" component={Analyse}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/panel" component={Panel}/>
      <Footer/>
    </Router>
  );
}

export default App;
