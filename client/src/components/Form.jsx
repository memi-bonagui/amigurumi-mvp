const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <h3>Adding a new amigurumi / crochet project</h3>
        <input
          className="form-control"
          name="name"
          value=""
          onChange={""}
          placeholder="Name of your project"
        />
        <input
          className="form-control"
          name="imageUrl"
          value=""
          onChange={""}
          placeholder="image url of your project"
        />
        <p>If you dont have an image yet, you can use one of these:</p>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Is this project completed?
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Is this project one of your favorites?
        </label>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="materials you need for this project "
        ></textarea>
      </div>
      <div className="mb-3">
        <p>Crochet terms you may need:</p>
      </div>
      <div>
        <h5>Now, write below the pieces</h5>
        <input
          className="form-control"
          name="piece_name"
          value=""
          onChange={""}
          placeholder="Name of the piece"
        />
        <input
          className="form-control"
          name="piece_imageUrl"
          value=""
          onChange={""}
          placeholder="Image IRL of the piece (optional)"
        />
        <textarea
          className="form-control"
          rows="3"
          placeholder="Write here your pattern.  "
        ></textarea>
        <button>Submit your piece</button>
      </div>
      <h5>Once you're done, save your pattern below the preview!</h5>
      <section>
        Preview
        <button>Save pattern</button>
      </section>
    </form>
  );
};

export default Form;
