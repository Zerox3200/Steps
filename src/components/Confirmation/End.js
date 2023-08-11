import Logo from './icon-thank-you.svg'
import './End.css'

export function End() {
    return (
        <div className='Submittion'>
            <img src={Logo} className='ThankYou' />
            <h2>Thank you!</h2>
            <p>Thanks for your submition we hope to have fun
                into our platform.if you need any support
                please send us email at support@gmail.com we hope you the best
            </p>
        </div>
    )
}