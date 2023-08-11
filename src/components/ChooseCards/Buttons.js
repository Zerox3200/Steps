import { Link } from "react-router-dom";
import './Cards.css';

function NB(props) {
    return (
        <div className='Back_Next'>
            <Link to={props.linking1} className="back1">{props.title1}</Link>
            <Link to={props.linking2} className='btn Next2'>{props.title2}</Link>
        </div>
    )
}
export { NB }