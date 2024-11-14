import axios from "axios";
import { useState } from "react";
import "../components_css/CreatePiecesForm.css";

const CreatePiecesForm = ({ createdAmigurumiId, setCreatePiecesId }) => {
  const [piecesForm, setPiecesForm] = useState({
    piece_name: "",
    pattern: "",
    piece_imageUrl: "",
    amigurumi_id: createdAmigurumiId,
  });

  const handleChange = (event) => {
    console.log("clicked!");
    const { name, value } = event.target;
    console.log({ name, value });
    setPiecesForm({ ...piecesForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `http://localhost:4000/api/amigurumis/${createdAmigurumiId}/pieces`,
        piecesForm
      );
      console.log(response);
      setCreatePiecesId(response.data.pieceId);
    } catch (error) {
      console.log(error.message);
    }
    setPiecesForm({
      piece_name: "",
      pattern: "",
      piece_imageUrl: "",
      amigurumi_id: createdAmigurumiId,
    });
  };

  return (
    <div className="mx-3 px-4">
      <div className="mx-5 px-4">
        <form onSubmit={handleSubmit}>
          <div>
            <h3 className="form-pieces-title mb-3">
              Now, add below the pieces of your work
            </h3>
            <div className=" card text-bg-secondary mb-3 ">
              <div className="fw-semibold fs-5 card-header">
                Crochet terms you may need
              </div>
              <div className=" crochet-terms card-body ">
                <p className="crochet-terms card-text">INC: Increase</p>
                <p className="crochet-terms card-text">DEC: Decrease</p>
                <p className="crochet-terms card-text">MR: Magic ring</p>
                <p className="crochet-terms card-text">CH: Chain stitch</p>
                <p className="crochet-terms card-text">SC: Single crochet</p>
                <p className="crochet-terms card-text">SS: Slip stitch</p>
              </div>
            </div>
            <input
              className="form-control mb-3"
              name="piece_name"
              value={piecesForm.piece_name}
              onChange={handleChange}
              placeholder="Name of the piece"
            />
            <input
              className="form-control mb-3"
              name="piece_imageUrl"
              value={piecesForm.piece_imageUrl}
              onChange={handleChange}
              placeholder="Image IRL of the piece (optional)"
            />
            <textarea
              className="form-control mb-3 pieces-textarea"
              rows="3"
              name="pattern"
              placeholder="Write here your pattern.  "
              onChange={handleChange}
              value={piecesForm.pattern}
            ></textarea>
            <button
              type="submit"
              className="btn btn-success piece-form-btn mb-3"
            >
              Submit your piece
            </button>
          </div>
          <div className="alert alert-info" role="alert">
            Add all the different pieces you need with their pattern, and once
            you`re done, check your amigurumi in your stored patterns!
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePiecesForm;
