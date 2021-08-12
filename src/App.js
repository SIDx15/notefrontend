
import Navbar from './Component/Navbar.jsx';
import Codeint from './Component/codeint.jsx';
import Allusers from './Component/Allusers.jsx';
import Addusers from './Component/adduser.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './Component/notfound.jsx';
import EditUser from './Component/edituser';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Codeint} />
        <Route exact path="/all" component={Allusers} />
        <Route exact path="/add" component={Addusers} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;