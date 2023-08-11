import { Link } from "react-router-dom"

function Step(props) {
    return (
        <div className='Step'>
            <Link className='circle' to={props.linking}>{props.number}</Link>
            <div className='Inside_Stpe'>
                <p>Step {props.number}</p>
                <p>{props.title}</p>
            </div>
        </div>
    )
}
export { Step }