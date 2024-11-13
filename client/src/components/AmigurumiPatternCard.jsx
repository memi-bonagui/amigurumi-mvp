import { useEffect, useState } from "react";
import axios from "axios";
import PiecesPatternCard from "./PiecesPatternCard";

const AmigurumisPatternCard = ({ selectedAmigurumiId }) => {
  const [selectedFullAmigurumi, setSelectedFullAmigurumi] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAmigurumi = async () => {
      if (!selectedAmigurumiId) return; // Exit if id is null or undefined

      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:4000/api/amigurumis/${selectedAmigurumiId}`
        );
        console.log(response.data); // Log the actual data
        setSelectedFullAmigurumi(response.data);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAmigurumi();
  }, [selectedAmigurumiId]);

  console.log(selectedFullAmigurumi);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!selectedFullAmigurumi) return null; // Don't render anything if data isn't available

  return (
    <div>
      <div className="card">
        <img
          src={selectedFullAmigurumi.imageUrl || "..."}
          className="card-img-top"
          alt={`Picture of ${selectedFullAmigurumi.name}`}
        />
        <div className="card-body">
          <h5 className="card-title">{selectedFullAmigurumi.name}</h5>
        </div>
      </div>
      {selectedFullAmigurumi.pieces && (
        <PiecesPatternCard pieces={selectedFullAmigurumi.pieces} />
      )}
    </div>
  );
};

export default AmigurumisPatternCard;
