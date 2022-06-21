import './About.scss';

function About() {
  return (
    <div className='About'>
      <img className='About_image' alt="rishabh" src={window.location.origin + '/images/rishabh.jpg'}></img>
      <div className='About_text'>
        Hello, <br /><br />
        I am Rishabh Mehta, born and brought up in kota, rajasthan. Kota is very famous for engineering and medical coaching classes.
        I did my schooling from here and completed graduation from NIT Goa, which is one of the top tier college in india. I was 
        so fond of gadgets and android applications that it encouraged me to pursue career in computer science.
        <br /><br />
        I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. 
        I love spending time on fixing little details and optimizing web apps.
        <br /><br />
        In my free time I love to watch sci fi movies like interstellar, contact, edge of tomorrow, gravity, martian etc. I am also a fan 
        of marvel movies and series. I also love to read novels based on real personalities. Among them my favourite one 
        is on Elon musk.
      </div>
    </div>
  );
}

export default About;
