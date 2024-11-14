import DeletePatternBtn from "./DeletePatternBtn";
import "../components_css/PatternList.css";

const PatternList = ({
  getAmigurumis,
  setAmigurumis,
  amigurumis,
  setSelectedAmigurumiId,
}) => {
  console.log(amigurumis);

  const handleSelectedPattern = (amigurumi) => {
    console.log(amigurumi);
    setSelectedAmigurumiId(amigurumi.id);
  };

  return (
    <div className=" mt-4 p-2">
      <div className="card gallery-card">
        <img
          src={amigurumis[0].imageUrl}
          className="card-img-top gallery-img"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title pb-1 text-center">{amigurumis[0].name}</h5>
          <button
            type="button"
            className="btn btn-primary pattern-gallery-btn"
            onClick={() => handleSelectedPattern(amigurumis[0])}
          >
            See Pattern
          </button>
        </div>
        <div className="p-3 pt-0">
          <DeletePatternBtn
            setAmigurumis={setAmigurumis}
            amigurumis={amigurumis[0]}
            getAmigurumis={getAmigurumis}
          />
        </div>
      </div>
    </div>
  );
};

export default PatternList;
