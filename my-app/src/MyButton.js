import "./MyButton.css";

export const MyButton = (props) => {

    return <button onClick={() => {

        if (props.alertMessage === undefined) {
            alert("Nie wiem o co chodzi?")
        } else {
            alert(props.alertMessage)
        } 
    }
} className="my-btn">{props.text}</button>
}