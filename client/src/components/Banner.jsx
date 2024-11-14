import { Link } from "react-router-dom";

import "../components_css/Banner.css";

const Banner = () => {
  return (
    <section className="banner container text-center d-flex justify-content-between">
      <div>
        <img
          className="img-banner py-2"
          src="https://cdn.pixabay.com/photo/2023/05/18/08/13/bear-8001665_960_720.png"
          alt="crochet dinosaur"
        />
      </div>
      <div className="p-3">
        <h1 className="fw-bolder my-5 fs-1">My Amigurumi Keeper</h1>
      </div>
      <div className="d-flex flex-column justify-content-around">
        <Link className="my-button1 btn btn-light my-3" to="/view-patterns">
          View stored patterns
        </Link>
        <Link className="my-button2 btn btn-light my-3" to="/">
          Back to homepage
        </Link>
        <Link className="my-button3 btn btn-light my-3" to="/add-pattern">
          Add new patterns
        </Link>
      </div>
    </section>
  );
};

export default Banner;
