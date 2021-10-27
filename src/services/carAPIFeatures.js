import axios from 'axios';

// const carId = 12;
// const url = `https://morning-chamber-68237.herokuapp.com/api/v1/cars/cars_by_id?id=${carId}&type=single`;
const url = 'https://damp-springs-06524.herokuapp.com/https://morning-chamber-68237.herokuapp.com/api/v1/cars/19';

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
