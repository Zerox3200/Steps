import './Main.css';
import { Step } from './components/Steps';

function Side(props) {
    return (
        <div className="Side">
            <Step number='1' title="Your info" linking="/"></Step>
            <Step number='2' title="Select a plan" linking="/Select"></Step>
            <Step number='3' title="ADD-ONS" linking="/pick"></Step>
            <Step number='4' title="SUMMARY" linking="/Summary"></Step>
        </div >
    )
}
export { Side }