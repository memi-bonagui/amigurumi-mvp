import CreateAmigurumiForm from "./CreateAmigurumiForm";
import CreatePiecesForm from "./CreatePiecesForm";

const Form = ({
  setCreatedAmigurumiId,
  createdAmigurumiId,
  setCreatePiecesId,
}) => {
  return (
    <>
      {createdAmigurumiId === null && (
        <CreateAmigurumiForm setCreatedAmigurumiId={setCreatedAmigurumiId} />
      )}
      {createdAmigurumiId !== null && (
        <CreatePiecesForm
          createdAmigurumiId={createdAmigurumiId}
          setCreatePiecesId={setCreatePiecesId}
        />
      )}
    </>
  );
};

export default Form;
