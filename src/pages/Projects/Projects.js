import './Projects.scss';

function Projects() {
  return (
    <div className='Projects'>
      <h1 className='Projects_title'>
        <b>Projects Completed</b>
      </h1>
      <div className='Projects_container'>
        <div className='Projects_container_items'>
          <iframe src="https://dosist.ca/" className='Projects_container_items_item'></iframe>
          <div className='Projects_text'>Dosist.ca</div>
        </div>
        <div className='Projects_container_items'>
          <iframe src="https://dosist.com/" className='Projects_container_items_item'></iframe>
          <div className='Projects_text'>Dosist.com</div>
        </div>
        <div className='Projects_container_items'>
          <iframe src="https://elevate.com/" className='Projects_container_items_item'></iframe>
          <div className='Projects_text'>Elevate.com</div>
        </div>
        <div className='Projects_container_items'>
          <iframe src="https://yml.co/" className='Projects_container_items_item'></iframe>
          <div className='Projects_text'>Yml.co</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
