import "./MyButton.css";

export const CalcBtn = (props) => {
  return (
    <button onClick={props.onClick} className="single-btn">
      {props.text}
    </button>
  );
};
