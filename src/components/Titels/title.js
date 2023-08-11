import './../../Main.css';

function Head(props) {
    return (
        <div className='Title'>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}
export { Head }