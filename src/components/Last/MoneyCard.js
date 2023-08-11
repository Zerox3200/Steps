import './Finish.css'
import { useSelector } from 'react-redux'

function Lasts(props) {
    const state = useSelector(((state) => state.Time)) || "Yr"
    return (
        <div className="Inside_Last_Step_pt2">
            <p>{props.title}</p>
            <p>+${props.price}/{state}</p>
        </div>
    )
}
export { Lasts }