import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getCars } from '../../redux/cars/cars';
import Sidebar from '../sidebar/Sidebar';
import Car from './Car';

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.carsReducer.cars);

  useEffect(() => {
    dispatch(getCars());
  }, []);

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
        <Col lg={10} md={8} xs={12} className="p-0">
          {cars.map((car) => (
            <Car
              id={car.id}
              key={car.id}
              name={car.name}
              imageUrl={car.image_data}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Cars;

// function Cars() {
//   return (
//     <Container fluid className="m-0 p-0">
//       <Row>
//         <Col lg={2} md={3} xs={12} className="p-0">
//           <Sidebar />
//         </Col>
//         <Col lg={10} md={8} xs={12} className="p-0">
//           This the main page!
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Cars;
