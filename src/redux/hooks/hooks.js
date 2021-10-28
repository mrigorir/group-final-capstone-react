import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDeletableCarsList } from '../cars/add&deleteCars';

const hooks = () => {
  const dispatch = useDispatch();
  const addDeleteCars = useSelector((state) => state.addDeleteCarsReducer);

  useEffect(() => {
    if (!addDeleteCars.length) {
      dispatch(getDeletableCarsList());
    }
  }, []);
};

export default hooks;
