import Form from "../components/Form";
import Preview from "../components/Preview";
import { useState } from "react";

const CreateAmigurumi = () => {
  const [createdAmigurumiId, setCreatedAmigurumiId] = useState(null);
  const [createPiecesId, setCreatePiecesId] = useState(null);

  return (
    <div>
      <Form
        setCreatedAmigurumiId={setCreatedAmigurumiId}
        createdAmigurumiId={createdAmigurumiId}
        setCreatePiecesId={setCreatePiecesId}
      />
      <Preview
        createdAmigurumiId={createdAmigurumiId}
        createPiecesId={createPiecesId}
      />
    </div>
  );
};

export default CreateAmigurumi;
