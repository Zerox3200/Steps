import { Link } from "react-router-dom"
import { Head } from "../Titels/title"
import './Finish.css'
import { Lasts } from "./MoneyCard"
import { NB } from "../ChooseCards/Buttons"
import { useSelector } from "react-redux"

function Summary() {
    const States = useSelector((state) => state.Time) || "Yr";
    let val1 = States === "Yr" ? 90 : 9;
    let val2 = States === "Yr" ? 10 : 1;
    let val3 = States === "Yr" ? 20 : 2;
    return (
        <div className="Last_Step">
            <Head
                title="Finishing Up" description="Double-check everything looks okay before confirming">
            </Head>
            <div className="Inside_Last_Step">
                <div className="Inside_Last_Step_pt1">
                    <div className="Inside_Last_Step_pt1_1">
                        <p>Acrade(Monthly)</p>
                        <Link>change</Link>
                    </div>
                    <div className="Inside_Last_Step_pt1_2">
                        <p>{val1}/{States}</p>
                    </div>
                </div>
                <Lasts title='Online service' price={val2}></Lasts>
                <Lasts title='Large Store' price={val3}></Lasts>
            </div>
            <NB linking1='/pick' title1="Go Back" linking2="/End" title2="Confirm"></NB>

        </div>
    )
}

export { Summary }