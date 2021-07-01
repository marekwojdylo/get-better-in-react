import "./MyButton.css";

export const CalcBtn = (props) => {

    return <button onClick={() => {
        alert("Great choice")
    }
} className="single-btn">{props.text}</button>
}