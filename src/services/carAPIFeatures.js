import axios from 'axios';

// const carId = 12;
// const url = `https://morning-chamber-68237.herokuapp.com/api/v1/cars/cars_by_id?id=${carId}&type=single`;
const url = 'https://damp-springs-06524.herokuapp.com/https://morning-chamber-68237.herokuapp.com/api/v1/cars/11';

const getCars = async () => {
  const response = await axios.get(url);
  const { data } = await response;
  console.log(data);
};

export default getCars;
