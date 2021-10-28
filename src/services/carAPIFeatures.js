import axios from 'axios';

const url = 'https://morning-chamber-68237.herokuapp.com/api/v1/cars';

const showDeletableCars = async () => {
  const response = await axios.get(url);
  const { data } = response;
  const deletableCarsList = [];
  data.map((data) => deletableCarsList.push(
    {
      id: data.id,
      name: data.name,
      image: data.image_data,
    },
  ));
  return deletableCarsList;
};


const showDetailCars = async () => {
  const response = await axios.get(url/ '${id}');
  const { data } = response;
  const detailCarsList = [];
  data.map((data) => detailCarsList.push(
    {
      id: data.id,
      name: data.name,
      image: data.image_data,
    },
  ));
  return detailCarsList;
};

const createCar = async (car) => {
  const response = await axios.post(url, car);
  return response.data;
};

const removeCar = async (id) => {
  const removeURL = `https://morning-chamber-68237.herokuapp.com/api/v1/cars/${id}`;
  const response = await axios.delete(removeURL);
  return response.data;
};

const getCars = async () => {
  const response = await axios.get('https://morning-chamber-68237.herokuapp.com/api/v1/cars/${id}');
  const { data } = await response;
  const cars = [];
  cars.push({
    id: data.id,
    name: data.name,
    image: data.image_data,
  });

  return cars;
};

export {
  showDeletableCars, createCar, removeCar, getCars, showDetailCars
};
