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

const createCar = async (car) => {
  const response = await axios.post(url, car);
  return response.data;
};

const removeCar = async (id) => {
  const removeURL = `https://morning-chamber-68237.herokuapp.com/api/v1/cars/${id}`;
  const response = await axios.delete(removeURL);
  return response.data;
};

export { showDeletableCars, createCar, removeCar };
