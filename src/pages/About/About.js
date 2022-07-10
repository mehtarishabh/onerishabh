import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import useContentful from '../../hooks/useContentful';
import { BLOCKS } from "@contentful/rich-text-types";
import './About.scss';

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <div>{children}<br /><br /></div>
    }
  }
}

function About() {
  const entry = useContentful(process.env.REACT_APP_CONTENTFUL.about);

  return (
    <div className='About'>
      <img className='About_image' alt="rishabh" src={window.location.origin + '/images/rishabh.jpg'}></img>
      <div className='About_text'>
        {documentToReactComponents(entry.description, RICHTEXT_OPTIONS)}
      </div>
    </div>
  );
}

export default About;
