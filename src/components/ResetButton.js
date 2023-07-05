import "./ResetButton.css"

const ResetButton = (props) =>{
    return (
<button className="btn" onClick={props.reset}>Resetuj na 0</button>
    )
}

export default ResetButton