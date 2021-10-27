import axios from 'axios';

const id = 19;
const url = 'https://morning-chamber-68237.herokuapp.com/api/v1/cars/20';

const getCars = async () => {
  const response = await axios.get(url);
  const { data } = await response;
  const cars = [];
  cars.push({
    id: data.id,
    name: data.name,
    image: data.image_data,
  });

  return cars;
};

export default getCars;
