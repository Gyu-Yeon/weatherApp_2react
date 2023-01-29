import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

function Modal(props) {
  const { handleInputChange, input, handleModalChange, handleSubmit } = props;
  return (
    <div className="modal">
      <CloseIcon className="close" onClick={handleModalChange} />
      <form onSubmit={(e) => handleSubmit(e, input)}>
        <input className="input" value={input} onChange={handleInputChange} />
        <Button
          variant="contained"
          color="success"
          className="change"
          type="submit"
        >
          Change
        </Button>
      </form>
    </div>
  );
}

export default Modal;
