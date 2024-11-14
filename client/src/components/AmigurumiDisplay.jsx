const AmigurumiDisplay = ({ fullAmigurumi }) => {
  console.log(fullAmigurumi);
  return (
    <div className="me-5 pe-4 ">
      <div className="card me-5 mb-1">
        <img
          src={fullAmigurumi.imageUrl}
          className="card-img-top"
          alt={`image of ${fullAmigurumi.name}`}
        />
        <div className="card-body">
          <h5 className="card-title">{fullAmigurumi.name}</h5>
          <p className="card-text pattern-text">{fullAmigurumi.supplies}</p>
        </div>
      </div>
    </div>
  );
};

export default AmigurumiDisplay;
