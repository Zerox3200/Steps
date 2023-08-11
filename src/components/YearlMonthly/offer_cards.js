import { NB } from '../ChooseCards/Buttons';
import { Head } from '../Titels/title';
import Cards0ffers from './cardsIntoOffers';
import './offers.css';
import { useSelector } from 'react-redux';

function CardsF() {
    const TimeState = useSelector((state) => state.Time) || "Yr";
    let payment1;
    let payment2;
    if (TimeState === "Yr") {
        payment1 = 10;
        payment2 = 20;
    } else if (TimeState === "Mo") {
        payment1 = 1;
        payment2 = 2;
    }
    return (
        <div className='Offers'>
            <Head
                title="Pick add-ons"
                description="Adding ons enhance your gaming experience">
            </Head>
            <Cards0ffers title='Online Service' desc='Access multiplayer games' sub={`+${payment1}/${TimeState}`}>
            </Cards0ffers>
            <Cards0ffers title='Online Service' desc='Access multiplayer games' sub={`+$${payment2}/${TimeState}`}>
            </Cards0ffers>
            <Cards0ffers title='Online Service' desc='Access multiplayer games' sub={`+$${payment2}/${TimeState}`}>
            </Cards0ffers>
            <NB linking1="/Select" linking2="/Summary" title1="Go Back" title2="Next Step"></NB>
        </div>
    )
}

export { CardsF }