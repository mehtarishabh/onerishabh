import { Seo } from '../../components/Seo/Seo';
import { pageSeo } from '../../lib/site-config';
import './About.scss';

function About() {
  return (
    <div className='About'>
      <Seo {...pageSeo.about} />
      <img
        className='About_image'
        alt="Rishabh Mehta — senior frontend and full-stack developer"
        src={`${window.location.origin}/images/rishabh.jpg`}
        width="280"
        height="280"
        loading="lazy"
      />
      <div className='About_text'>
        <h1 className="About_heading">About Rishabh Mehta</h1>
        Hello, <br /><br />
        I am Rishabh Mehta, born and brought up in kota, rajasthan. Kota is very famous for engineering and medical coaching classes.
        I did my schooling from here and completed graduation from NIT Goa, which is one of the top tier college in india. I was 
        so fond of gadgets and android applications that it encouraged me to pursue career in computer science.
        <br /><br />
        I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. 
        I love spending time on fixing little details and optimizing web apps. I am passionate about leveraging my diverse backgrounds 
        to decipher challenging problems and create delightful experiences.
        <br /><br />
        In my free time I love to watch sci fi movies like interstellar, contact, edge of tomorrow, gravity, martian etc. I am also a fan 
        of marvel movies and series. I also love to read novels based on real personalities. Among them my favourite one 
        is on Elon musk.
      </div>
    </div>
  );
}

export default About;
