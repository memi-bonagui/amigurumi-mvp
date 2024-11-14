import "../components_css/HomePage.css";

const HomePage = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h4 className="my-3 fs-3 homepage-text">
        Add and keep safe your amigurumi and crochet patterns!
      </h4>
      <img
        src="https://garnknuten.com/cdn/shop/files/garnknuten-amigurumi-crochet-patterns.webp?v=1663324709&width=3840"
        alt="..."
        className="homepage-img"
      />
    </div>
  );
};

export default HomePage;
