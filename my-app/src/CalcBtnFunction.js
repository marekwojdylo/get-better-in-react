import "./MyButton.css";

export const CalcBtnFunction = (props) => {

    return <button onClick={() => {
        alert("Great Function choice")
    }
} className="single-btn-function">{props.text}</button>
}