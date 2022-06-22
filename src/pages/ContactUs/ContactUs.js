import { useEffect, useState } from 'react';
import { collection, addDoc } from "firebase/firestore";

import './ContactUs.scss';
import { db } from "../../firebase-config";

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const contactRef = collection(db, "contact");


  const createContact = async (e) => {
    e.preventDefault();
    try {
      alert(msg);
      const docRef = await addDoc(contactRef, { name: name, email: email, phone_number: phoneNo, message: msg });
      console.log("Document written with ID: ", docRef.id);
      setName("");
      setEmail("");
      setPhoneNo();
      setMsg("");
      setSubmitted(true);
    } catch (e) {
      console.error("Error adding document: ", e);
      setErr(e);
    }
  };

  useEffect(() => {
    if(name.length > 0 && email.length > 0 && phoneNo.length > 0 && msg.length > 0) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }, [name, email, phoneNo, msg])

  return (
    <div className='ContactUs'>
      <h1 className='ContactUs_title'>
        <b>Get In Touch</b>
      </h1>
      {!submitted && <form className='ContactUs_form' onSubmit={createContact}>

        <input autoFocus type="text" className="ContactUs_form_name" placeholder='Full Name'
          onChange={(e) => setName(e.target.value)} value={name} name="full name" required/>
        <input type="email" className="ContactUs_form_email" placeholder='Email'
          onChange={(e) => setEmail(e.target.value)} value={email} name="email id" required/>
        <input type="number" className="ContactUs_form_number" placeholder='Phone Number' 
          onChange={(e) => setPhoneNo(e.target.value)} value={phoneNo} name="phone no" required/>
        <textarea className="ContactUs_form_message" placeholder='Enter your message'
          onChange={(e) => setMsg(e.target.value)} value={msg} required/>

        <button type="submit" disabled={!isEnabled} className="ContactUs_form_submit">Submit</button>
        <div>{err}</div>
      </form>}
      {submitted && <div className='ContactUs_wrapper'>
          <div className='ContactUs_text'>Thank you!</div>
          <div className='ContactUs_text'>We'll be in touch soon.</div>
          <br /><br />
        </div>
      }
      <div className='ContactUs_wrapper'>
        <span className='ContactUs_text'><b>Phone: </b></span>
        <span className='ContactUs_data'>+91 8747824255</span>
      </div>
      <div className='ContactUs_wrapper'>
        <span className='ContactUs_text'><b>Email: </b></span>
        <span className='ContactUs_data'>mehta.rishabh0@gmail.com</span>
      </div>
    </div>
  );
}

export default ContactUs;
