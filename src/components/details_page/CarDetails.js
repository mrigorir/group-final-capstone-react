import React from 'react';
import getCars from '../../services/carAPIFeatures';
import ImageGallery from 'react-image-gallery';

function CarDetails(props) {
  getCars();

  return (
    <div>
      <ImageGallery items={Images} />
    </div>
  );
}

export default CarDetails;
