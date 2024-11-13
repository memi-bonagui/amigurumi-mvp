import axios from "axios";

const DeletePatternBtn = ({ amigurumis, getAmigurumis }) => {
  const handleDelete = async () => {
    console.log(`deleting this amigurumi with id ${amigurumis.id}`);
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/amigurumis/${amigurumis.id}`
      );
      console.log(response);
      getAmigurumis();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => handleDelete(amigurumis)}
      >
        Delete
      </button>
    </div>
  );
};

export default DeletePatternBtn;
