import axios from "axios";
import { useState } from "react";

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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h5>Now, add below the pieces of your work</h5>
          <div className="card text-bg-secondary mb-3">
            <div className="card-header">Crochet terms you may need</div>
            <div className="card-body">
              <p className="card-text">Sc: Single crochet</p>
            </div>
          </div>
          <input
            className="form-control"
            name="piece_name"
            value={piecesForm.piece_name}
            onChange={handleChange}
            placeholder="Name of the piece"
          />
          <input
            className="form-control"
            name="piece_imageUrl"
            value={piecesForm.piece_imageUrl}
            onChange={handleChange}
            placeholder="Image IRL of the piece (optional)"
          />
          <textarea
            className="form-control"
            rows="3"
            name="pattern"
            placeholder="Write here your pattern.  "
            onChange={handleChange}
            value={piecesForm.pattern}
          ></textarea>
          <button type="submit">Submit your piece</button>
        </div>
        <h5>
          Add all the different pieces you need with their pattern, and once
          you`re done, check your amigurumi in your saved patterns!
        </h5>
      </form>
    </div>
  );
};

export default CreatePiecesForm;
