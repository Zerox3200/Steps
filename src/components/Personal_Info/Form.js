import './Forms.css';
import { Head } from '../Titels/title';
import { useState } from 'react';
import { Step } from '../Steps';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SavingEmail, SavingName, SavingPhone } from '../../store/actions/FormActions';


function Forming() {
    //Create the redux............................................................................................................
    const Forming = useSelector((state) => state.Form);
    const dispatch = useDispatch();
    //Get states..................................................................................................................
    const navigation = useNavigate("");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, SetPhone] = useState("");

    const [class1, setclass1] = useState(false);
    const [class2, setclass2] = useState(false);
    const [class3, setclass3] = useState(false);
    const [Bordering, setBordering] = useState(false);
    const [Bordering2, setBordering2] = useState(false);
    const [Bordering3, setBordering3] = useState(false);

    const NameValidation = new RegExp(/^[a-zA-Z]+\s[a-zA-Z]+$/gmid);
    const EmailValidation = new RegExp(/^[a-z0-9]+@[a-z]+\.(com|net|org)$/gmid);
    const PhoneValidation = new RegExp(/^[0-9]{11}$/gim)

    let ClassAlert, ClassAlert2, ClassAlert3, ClassAlert4, ClassAlert5, ClassAlert6;
    function FormSubmitting(e) {
        e.preventDefault();
        //Validate on name.................................................................................!
        if (!Name && !Forming[0]) {
            setclass1(true);
            setBordering(true);
            return;
        } else if (Name) {
            console.log(Name);
            if (NameValidation.test(Name)) {
                setclass1(false);
                setBordering(false);
                console.log("Match");
                dispatch(SavingName(Name))
            } else if (!NameValidation.test(Name)) {
                setclass1(true);
                setBordering(true);
                console.log("Name don't match");
                return;
            }
        }
        //Validate on email........................................................
        if (!Email && !Forming[1]) {
            setclass2(true);
            setBordering2(true);
            return;
        } else if (Email) {
            console.log(Email);
            if (EmailValidation.test(Email)) {
                setclass2(false);
                setBordering2(false);
                console.log("Email match");
                dispatch(SavingEmail(Email))
            } else if (!EmailValidation.test(Email)) {
                setclass2(true);
                setBordering2(true);
                console.log("Email don't match!");
                return;
            }
        }
        //Validate on phone number..................................................
        if (!Phone && !Forming[2]) {
            setclass3(true);
            setBordering3(true);
            return;
        } else if (Phone) {
            console.log(Phone);
            if (PhoneValidation.test(Phone)) {
                setclass3(false);
                setBordering3(false);
                console.log("Phone match");
                dispatch(SavingPhone(Phone));
            } else if (!PhoneValidation.test(Phone)) {
                setclass3(true);
                setBordering3(true);
                console.log("Phone don't match!");
                return;
            }
        }
        navigation("/Select");
    }
    ClassAlert = class1 ? "Alert1" : "Good";
    ClassAlert2 = class2 ? "Alert1" : "Good";
    ClassAlert3 = class3 ? "Alert1" : "Good";
    ClassAlert4 = Bordering ? "form-control Bordering" : "form-control";
    ClassAlert5 = Bordering2 ? "form-control Bordering" : "form-control";
    ClassAlert6 = Bordering3 ? "form-control Bordering" : "form-control"
    return (
        <>
            <div className="Side">
                <Step number='1' title="Your info" linking="/"></Step>
                <div className='Step'>
                    <span className='circle' onClick={FormSubmitting}>2</span>
                    <div className='Inside_Stpe'>
                        <p>Step 2</p>
                        <p>Select a plan</p>
                    </div>
                </div>
                <Step number='3' title="ADD-ONS" linking="/pick"></Step>
                <Step number='4' title="SUMMARY" linking="/Summary"></Step>
            </div >
            <div className='FirstPage'>
                <Head
                    title="Personal Info"
                    description="Please provide your name, email address and phone number">
                </Head>
                <form>
                    <div className="mb-3 Part">
                        <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                        <input type="text" className={ClassAlert4} placeholder='Full Name' id="formGroupExampleInput"
                            onChange={(e) => {
                                setName(e.target.value);
                            }} value={Forming[0]} />
                        <p className={ClassAlert}>This field is required</p>
                    </div>
                    <div className="mb-3 Part">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Email Address</label>
                        <input type="text" className={ClassAlert5} id="formGroupExampleInput2"
                            placeholder="Ziad@email.com" onChange={(e) => {
                                setEmail(e.target.value);
                            }} value={Forming[1]} />
                        <p className={ClassAlert2}>This field is required</p>
                    </div>
                    <div className="mb-3 Part">
                        <label htmlFor="formGroupExampleInput3" className="form-label">Phone Number</label>
                        <input type="text" className={ClassAlert6} id="formGroupExampleInput3" placeholder="01*********"
                            onChange={(e) => {
                                SetPhone(e.target.value)
                            }} value={Forming[2]} />
                        <p className={ClassAlert3}>This field is required</p>
                    </div>
                    <button className='btn btn-primary Next1 Next2' onClick={FormSubmitting}>Next Step</button>
                </form>
            </div>
        </>
    )
}

export { Forming }