import "../components_css/NoAmigurumiAlert.css";

const NoAmigurumiAlert = () => {
  return (
    <div className="card text-center">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/026/346/067/small_2x/cute-dinosaur-holding-bw-error-404-animation-t-rex-animal-error-message-gif-motion-graphic-adorable-prehistorical-reptile-baby-dino-animated-character-outline-4k-isolated-on-white-background-video.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="alert alert-warning" role="alert">
        There`s no amigurumi yet!
      </div>
    </div>
  );
};

export default NoAmigurumiAlert;
