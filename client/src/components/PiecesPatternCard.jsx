import { Fragment } from "react";

const PiecesPatternCard = ({ pieces }) => {
  console.log(pieces);
  return (
    <div>
      {pieces.map((piece) => {
        return (
          <Fragment key={piece.id}>
            <div className="card border-info mb-3">
              <div className="card-header">{piece.piece_name}</div>
              <div className="card-body">
                <h5 className="card-title">nfo card titleI</h5>
                <p className="card-text">{piece.pattern}</p>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default PiecesPatternCard;
