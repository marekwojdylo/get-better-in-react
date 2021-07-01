import "./MyButton.css";

export const CalcBtnDouble = (props) => {

    return <button onClick={() => {
        alert("Even Greater choice")
    }
} className="double-btn">{props.text}</button>
}