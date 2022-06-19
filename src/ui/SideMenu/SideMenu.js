import { useState } from 'react';
import './SideMenu.scss';

function SideMenu(props) {
  const [menuItems] = useState(['Skills', 'Work Exp', 'Education', 'Accolades', 'Certifications'])
  return (
    <div className='SideMenu'>
      {
        menuItems.map((item, index)=> {
          return <div className={'SideMenu_item '+ (props.activeIndex === index? 'active': "")} key={item} onClick={() => props.onSideMenuClick(index)}>
            {item}
          </div>
        })
      }
    </div>
  );
}

export default SideMenu;
