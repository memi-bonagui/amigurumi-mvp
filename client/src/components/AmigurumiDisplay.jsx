const AmigurumiDisplay = ({ fullAmigurumi }) => {
  console.log(fullAmigurumi);
  return (
    <>
      <div className="card">
        <img src={fullAmigurumi.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{fullAmigurumi.name}</h5>
          <p className="card-text">{fullAmigurumi.supplies}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default AmigurumiDisplay;
