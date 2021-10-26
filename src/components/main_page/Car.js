import 'bootstrap/dist/css/bootstrap.min.css';

const Car = (props) => {
  const {
    name, imageUrl, /* eslint-disable-line react/prop-types */
  } = props;

  return (
    <article className="d-flex flex-row mb-4">
      <img className="car-img mx-3" src={imageUrl} alt="" />
      <div className="car-info">
        <h1 className="car-ttile"> Cars to Rent </h1>
        <p>
          { name }
        </p>
      </div>
    </article>
  );
};

export default Car;
