import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

import './Main.scss';

function Main(props) {
  return (
      <section className='Main container'>
        <h1 className='Main_title'>Hello, I'm <span className='pink'>Rishabh Mehta</span>.</h1>
        <p className='Main_subtitle'>I'm a JavaScript web developer.</p>
        <button
          type="button"
          className='Main_scrolldown'
          onClick={props.onScrolldownClick}
          aria-label="Scroll to skills section"
        >
          <FontAwesomeIcon icon={faAnglesDown} size="2x"/>
        </button>
      </section>
  );
}

export default Main;
