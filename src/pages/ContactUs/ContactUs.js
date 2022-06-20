import './ContactUs.scss';

function ContactUs() {
  return (
    <div className='ContactUs'>
      <img className='About_image' alt="rishabh" src={window.location.origin + '/images/rishabh.jpg'}></img>
      <div className='ContactUs_text'>
        <b>Phone:</b> 8747824255
      </div>
      <div className='ContactUs_text'>
        <b>Email:</b> mehta.rishabh0@gmail.com
      </div>
    </div>
  );
}

export default ContactUs;
