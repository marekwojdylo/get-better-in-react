import "./MyButton.css";

export const CalcBtnTriple = (props) => {
  return (
    <button onClick={props.onClick} className="triple-btn">
      {props.text}
    </button>
  );
};
