import axios from "axios";
import { useState } from "react";

const CreateAmigurumiForm = ({ setCreatedAmigurumiId }) => {
  const [amigurumiForm, setAmigurumiForm] = useState({
    name: "",
    supplies: "",
    isCompleted: false,
    isFavorite: false,
    imageUrl: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log({ name, value });
    console.log(event.target.checked);
    setAmigurumiForm((prev) => ({ ...prev, [name]: value })); // referenciar valor con []
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "http://localhost:4000/api/amigurumis",
        amigurumiForm
      );
      console.log(response);
      setCreatedAmigurumiId(response.data.amigurumiId);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h3>Adding a new amigurumi / crochet project</h3>
          <input
            className="form-control"
            name="name"
            value={amigurumiForm.name}
            onChange={handleChange}
            placeholder="Name of your project"
          />
          <input
            className="form-control"
            name="imageUrl"
            value={amigurumiForm.imageUrl}
            onChange={handleChange}
            placeholder="image url of your project"
          />
          <p>If you dont have an image yet, you can use one of these:</p>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="isCompleted"
            id="flexCheckChecked"
            onChange={handleChange}
            value={amigurumiForm.isCompleted}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Is this project completed?
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="isFavorite"
            id="flexCheckChecked"
            onChange={handleChange}
            value={amigurumiForm.isFavorite}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Is this project one of your favorites?
          </label>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            name="supplies"
            placeholder="Supplies you need for this project. E.g: Size of your hook; size, colors and type of your yarn; etc,. "
            value={amigurumiForm.supplies}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateAmigurumiForm;
