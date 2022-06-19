import './Footer.scss';

function Footer() {
  return (
    <div className='Footer container'>
      <div>© Copyright 2022. All right reserved</div>
      <div>
        <a className='Footer_icons' href="https://www.linkedin.com/in/rishabh-mehta-76447b5a/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className='Footer_icons' href="https://github.com/mehtarishabh" target="_blank" rel="noreferrer">Github</a>
        <a className='Footer_icons' href="https://leetcode.com/user8099ea/" target="_blank" rel="noreferrer">Leetcode</a>
      </div>
    </div>
  );
}

export default Footer;
