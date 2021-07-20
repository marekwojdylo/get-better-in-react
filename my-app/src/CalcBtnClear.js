import "./MyButton.css";

export const CalcBtnClear = (props) => {
  return (
    <button onClick={props.onClick} className="double-btn">
      {props.text}
    </button>
  );
};
