import { Link } from "react-router-dom";
// import PatternGallery from "../views/PatternGallery";
// import CreateAmigurumi from "../views/CreateAmigurumi";

const Banner = () => {
  return (
    <section className="container, text-center">
      <div>My Amigurumi Keeper</div>
      <div>
        Here you can add and keep safe your amigurumi and crochet patterns!
      </div>
      <Link to="/view-patterns">View stored patterns</Link>
      <Link to="/add-pattern">Add new patterns</Link>
    </section>
  );
};

export default Banner;
