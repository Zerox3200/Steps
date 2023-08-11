import './Cards.css';
import { Head } from './../Titels/title.js';
import Logo1 from './icon-advanced.svg';
import Logo2 from './icon-arcade.svg';
import Logo3 from './icon-pro.svg';
import { NB } from './Buttons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetYearly } from '../../store/actions/actions';
import { Move } from '../../store/actions/leftAction';


function Cards() {
    //Call the redux................................................................................
    const Timing = useSelector((state) => state.Time) || "Yr";
    const Direction = useSelector((state) => state.Direction) || "Right";
    const dispatch = useDispatch()
    //Create the states.............................................................................
    let Changing;
    let Month, Yearly;
    let appere;
    let [Monthly, setMonthly] = useState("Mo");
    //...............................................................................................
    Changing = Timing === "Yr" || Direction === "Right" ? "Rolling"
        : Timing === "Mo" || Direction === "Left" ? "Rolling left" : "Rolling";

    Month = Timing === "Mo" || Direction === "Left" ? "bold1"
        : Timing === "Yr" || Direction === "Right" ? "bold2" : "bold2";

    Yearly = Timing === "Yr" || Direction === "Right" ? "bold1"
        : Timing === "Mo" || Direction === "Left" ? "bold2" : "bold2";

    appere = Timing === "Mo" || Direction === "Left" ? "Desc_appere" :
        Timing === "Yr" || Direction === "Right" ? "Desc_disappere" : "Desc_disappere";
    function Roll() {
        if (Yearly === "bold1") {
            setMonthly("Yr")
            dispatch(SetYearly(Monthly));
            dispatch(Move("Left"));
        } else if (Month === "bold1") {
            setMonthly("Mo");
            dispatch(SetYearly("Yr"));
            dispatch(Move("Right"));
        }
        console.log(Monthly);
        console.log(`Main Monthly: ${Monthly}`)
        console.log(Timing);
        console.log(Direction)
        console.log("*************************************************************************");
    }
    // console.log(`Main Monthly: ${Monthly}`)
    // console.log(Timing);
    // console.log(Direction)
    // console.log("*************************************************************************");


    //Get the data we need..............................................................................
    return (
        <div className='cards'>
            <Head title="Select your plan" description="You have the option or yearly billing">
            </Head>
            <div className='cards_row'>
                <div className='cardX'>
                    <img src={Logo1} alt='empty' />
                    <div className='inside_card'>
                        <p>Acrade</p>
                        <p>$9/Yr</p>
                        <p className={appere}>2 months free</p>
                    </div>
                </div>
                <div className='cardX'>
                    <img src={Logo2} alt='empty' />
                    <div className='inside_card'>
                        <p>Advanced</p>
                        <p>$12/Yr</p>
                        <p className={appere}>2 months free</p>
                    </div>
                </div>
                <div className='cardX'>
                    <img src={Logo3} alt='empty' />
                    <div className='inside_card'>
                        <p>Acrade</p>
                        <p>$150/Yr</p>
                        <p className={appere}>2 months free</p>
                    </div>
                </div>
            </div>
            <div className='Sub'>
                <div className='inside_Sub'>
                    <p className={Month}>Monthly</p>
                    <div className={Changing} onClick={Roll}>
                        <div className='Rolling_circle'></div>
                    </div>
                    <p className={Yearly}>Yearly</p>
                </div>
            </div>
            <NB linking1="/" linking2="/pick" title1="Go Back" title2="Next Step"></NB>
        </div >
    )
}
export { Cards }

