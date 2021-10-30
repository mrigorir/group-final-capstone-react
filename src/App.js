import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './dist/styles/global.css';
import './dist/styles/sidebar.css';
import './dist/styles/reservation_form.css';
import './dist/styles/signing.css';
import './dist/styles/carForm.css';
import './dist/styles/carDelete.css';
import './dist/styles/reservationList.css';
import Reserve from './components/reserve_form/Reserve';
import Cars from './components/cars/Cars';
import CarDetails from './components/details_page/CarDetails';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import LogOut from './components/Menu/Logout';
import MyReservations from './components/reservations/Myreservations';
import AddCar from './components/cars/AddCar';
import DeleteCar from './components/cars/DeleteCar';

library.add(fas, fab);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signin" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/signout" component={LogOut} />
        <Route path="/reserve-form" component={Reserve} />
        <Route path="/car-details" component={CarDetails} />
        <Route path="/cars" component={Cars} />
        <Route path="/my-reservations" component={MyReservations} />
        <Route path="/add-car" component={AddCar} />
        <Route path="/delete-car" component={DeleteCar} />
      </Switch>
    </Router>
  );
}

export default App;
