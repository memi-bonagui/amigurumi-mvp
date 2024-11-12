import { useState } from "react";
import AmigurumiDisplay from "./AmigurumiDisplay";
import axios from "axios";
import { useEffect } from "react";
import PiecesDisplay from "./PiecesDisplay";

const Preview = ({ createdAmigurumiId, createPiecesId }) => {
  const [fullAmigurumi, setFullAmigurumi] = useState(undefined);

  useEffect(() => {
    const getAmigurumi = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/amigurumis/${createdAmigurumiId}`
        );
        console.log(response);
        setFullAmigurumi(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (createdAmigurumiId !== null) {
      getAmigurumi();
    }
  }, [createdAmigurumiId, createPiecesId]);

  return (
    <div>
      {createdAmigurumiId === null && "There's no amigurumi yet!"}
      {fullAmigurumi !== undefined && (
        <AmigurumiDisplay fullAmigurumi={fullAmigurumi} />
      )}
      {fullAmigurumi !== undefined && (
        <PiecesDisplay pieces={fullAmigurumi.pieces} />
      )}
    </div>
  );
};

export default Preview;
