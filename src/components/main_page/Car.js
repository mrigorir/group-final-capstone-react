const Car = (props) => {
  const {
    name, imageUrl, /* eslint-disable-line react/prop-types */
  } = props;

  return (
    <article className="d-flex flex-row mb-4">
      <img className="rocket-img mx-3" src={imageUrl} alt="" />
      <div className="rocket-info">
        <h3 className="rocket-name">{ name }</h3>
        <p>
          { name }
        </p>
      </div>
    </article>
  );
};

export default Car;
