import { Fragment } from "react";

const PiecesPatternCard = ({ pieces }) => {
  console.log(pieces);
  return (
    <div>
      {pieces.map((piece) => {
        return (
          <Fragment key={piece.id}>
            <div className="card border-light mb-3">
              <div className="card-header fw-semibold">{piece.piece_name}</div>
              <div className="card-body">
                <p className="card-text pattern-text">{piece.pattern}</p>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default PiecesPatternCard;
