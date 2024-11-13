import Form from "../components/Form";
import Preview from "../components/Preview";
import { useState } from "react";

const CreateAmigurumi = () => {
  const [createdAmigurumiId, setCreatedAmigurumiId] = useState(null);
  const [createPiecesId, setCreatePiecesId] = useState(null);

  return (
    <div className="d-flex flex-row justify-content-around mt-4">
      <div>
        <Form
          setCreatedAmigurumiId={setCreatedAmigurumiId}
          createdAmigurumiId={createdAmigurumiId}
          setCreatePiecesId={setCreatePiecesId}
        />
      </div>
      <div className="mt-4">
        <Preview
          createdAmigurumiId={createdAmigurumiId}
          createPiecesId={createPiecesId}
        />
      </div>
    </div>
  );
};

export default CreateAmigurumi;
