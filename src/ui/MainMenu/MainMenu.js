import { NavLink } from 'react-router-dom';

import './MainMenu.scss';

function MainMenu(props) {
  return (
    <div className='MainMenu' onClick={props.closeClick}>
      <div className='MainMenu_close'>X</div>
        <NavLink to="/" className="MainMenu_items">Home</NavLink>
        <NavLink to="/contact" className="MainMenu_items">Contact</NavLink>
        <NavLink to="/about" className="MainMenu_items">About</NavLink>
    </div>
  );
}

export default MainMenu;
