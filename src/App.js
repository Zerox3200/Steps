import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Side } from './Main1';
import { Forming } from './components/Personal_Info/Form.js';
import { Cards } from './components/ChooseCards/Cards';
import { CardsF } from './components/YearlMonthly/offer_cards';
import { Summary } from './components/Last/Finish';
import { End } from './components/Confirmation/End.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<>
        <Forming></Forming>
      </>}></Route>
      <Route path='Select' element={<>
        <Side></Side>
        <Cards></Cards>
      </>}></Route>
      <Route path='pick' element={
        <>
          <Side></Side>
          <CardsF></CardsF>
        </>
      }></Route>
      <Route path='Summary' element={
        <>
          <Side></Side>
          <Summary></Summary>
        </>
      }></Route>
      <Route path='End' element={
        <>
          <Side></Side>
          <End></End>
        </>
      }></Route>
    </Routes>
  );
}

export default App;
