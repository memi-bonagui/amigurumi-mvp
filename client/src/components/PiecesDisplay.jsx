import { Fragment } from "react";
import "../components_css/PiecesDisplay.css";

const PiecesDisplay = ({ pieces }) => {
  console.log(pieces);
  return (
    <div>
      {pieces.map((piece) => {
        return (
          <Fragment key={piece.id}>
            <div className="card border-light mb-1">
              <div className="card-header pieces-header fw-semibold">
                {piece.piece_name}
              </div>
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

export default PiecesDisplay;
