import { useSelector } from 'react-redux';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import Sidebar from '../sidebar/Sidebar';
import CarCard from './CarCard';
import hooks from '../hooks/hooks';

const Cars = () => {
  const cars = useSelector((state) => state.carsReducer.cars);

  hooks();

  if (cars.length === 0) {
    return (
      <h1>loading</h1>
    );
  }
  return (
    <Container fluid className="m-0 p-0">
      <Row>
        <Col lg={2} md={3} xs={12} className="p-0">
          <Sidebar />
        </Col>
        <Col lg={10} md={8} xs={12} className="p-0 position-relative">
          <div className="view">
            <h1 className="text-center text-white bg-secondary p-3 mx-auto w-75 mt-5">Lastest Models of Car</h1>
            <p className="text-center text-secondary mt-5 fs-4 shadow-sm mx-auto w-75 p-2"> Only here you can see all the lastest models and reserve the ones you like</p>
            <div className="d-flex align-items-center justify-conent-between m-5 flex-wrap">
              {cars.map((car) => (
                <CarCard
                  id={car.id}
                  key={car.id}
                  name={car.name}
                  imageUrl={car.image_data}
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Cars;
