import "./MyButton.css";

export const CalcBtnTriple = (props) => {

    return <button onClick={() => {
        alert("Great choice, now what?")
    }
} className="triple-btn">{props.text}</button>
}