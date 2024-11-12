const PatternList = ({ amigurumis, setSelectedAmigurumiId }) => {
  console.log(amigurumis);

  const handleSelectedPattern = (amigurumi) => {
    console.log(amigurumi);
    setSelectedAmigurumiId(amigurumi.id);
  };

  return (
    <div>
      <div className="card">
        <img src={amigurumis[0].imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{amigurumis[0].name}</h5>
          <button onClick={() => handleSelectedPattern(amigurumis[0])}>
            See Pattern
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatternList;
