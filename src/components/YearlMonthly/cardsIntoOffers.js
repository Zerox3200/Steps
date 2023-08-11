import './offers.css';

function Cards0ffers(props) {
    return (
        <div className='offer_card'>
            <div className='offer_card_pt1'>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            </div>
            <div className='offer_card_pt2'>
                <p>{props.title}</p>
                <p>{props.desc}</p>
            </div>
            <div className='offer_card_pt3'>
                <p>{props.sub}</p>
            </div>
        </div>
    )
}
// Online Service
// Access multiplayer games
// +$1/mo
export default Cards0ffers