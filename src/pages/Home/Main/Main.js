import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

import './Main.scss';

function Main(props) {
  return (
      <section className='Main container'>
        <h1 className='Main_title'>Hello, I'm <span className='pink'>Rishabh Mehta</span>.</h1>
        <div className='Main_subtitle'>I'm a javascript web develeoper.</div>
        <div className='Main_scrolldown' onClick={props.onScrolldownClick}>
          <FontAwesomeIcon icon={faAnglesDown} size="2x"/>
        </div>
      </section>
  );
}

export default Main;
