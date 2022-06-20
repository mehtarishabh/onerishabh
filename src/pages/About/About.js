import './About.scss';

function About() {
  return (
    <div className='About'>
      <img className='About_image' alt="rishabh" src={window.location.origin + '/images/rishabh.jpg'}></img>
      <div className='About_text'>
        Hello, <br /><br />
        I am Rishabh Mehta. I was born in a small town called kota in rajasthan which is very famous for engineering coaching classes.
        I studied their till 12th and then completed my graduation from NIT goa which is one of the top colleges in india.I was 
        so fond of gadgets and android applicatiosnthat it excited me to take computer science branch. While graduating I tried my hands 
        a lot of front end application and mobile application frameworks.
        <br /><br />
        I love watching movies in my free time. To further add to it I have watched almost all movies on space science like interstellar, 
        contact, edge of tomorrow, gravity, martian etc. I have also like watching horror movies. To add to it i am also watching marvel phase 4 movies 
        and series these days.
        <br /><br />
        Besides this I like investing and reding novels.
      </div>
    </div>
  );
}

export default About;
