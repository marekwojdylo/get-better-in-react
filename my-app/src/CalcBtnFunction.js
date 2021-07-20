import "./MyButton.css";

export const CalcBtnFunction = (props) => {
  return (
    <button onClick={props.onClick} className="single-btn-function">
      {props.text}
    </button>
  );
};
