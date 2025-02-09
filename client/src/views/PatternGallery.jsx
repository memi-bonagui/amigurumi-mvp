import PatternList from "../components/PatternList";
import axios from "axios";
import { useEffect, useState } from "react";
import AmigurumiPatternCard from "../components/AmigurumiPatternCard";

// should get full amigurumi
//should map over all the amigurumis lists

const PatternGallery = () => {
  const [amigurumis, setAmigurumis] = useState([]);
  const [selectedAmigurumiId, setSelectedAmigurumiId] = useState(null);

  const getAmigurumis = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/amigurumis/`);
      console.log(response);
      setAmigurumis(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAmigurumis();
  }, []);

  return (
    <div className=" d-flex flex-row justify-content-evenly flex-wrap">
      {selectedAmigurumiId === null &&
        amigurumis.map((amigurumi) => (
          <PatternList
            key={amigurumi.id}
            amigurumis={[amigurumi]}
            setSelectedAmigurumiId={setSelectedAmigurumiId}
            selectedAmigurumiId={selectedAmigurumiId}
            setAmigurumis={setAmigurumis}
            getAmigurumis={getAmigurumis}
          />
        ))}
      {selectedAmigurumiId !== null && (
        <AmigurumiPatternCard selectedAmigurumiId={selectedAmigurumiId} />
      )}
    </div>
  );
};

export default PatternGallery;
