import react_icon from './images/icons8-react-48(1).png';
import php_logo from './images/icons8-php-logo-50(1).png';
import html_logo from './images/icons8-html-filetype-50.png';
import css_logo from './images/icons8-css3-30.png';
import js_logo from './images/icons8-javascript-30.png';
import bootstrap_logo from './images/icons8-bootstrap-48.png';
export const Services = () => {

  return (
    <div className="what-i-do" id='what-i-do'>
      <div className="about-me-text">
      Services
      </div>
      <div className="what-i-do-2">
      What I Do?
      </div>
      <div className='react'>
      <img className='react-img' src={html_logo} alt="reacts js"/>
        <div className='react-info'>
      <h3>HTML</h3>
      <p>Create Structure of site using html.</p>
      </div>
      <img className='react-img-2' src={css_logo} alt="reacts js"/>
        <div className='react-info'>
      <h3>CSS</h3>
      <p>Make site responsive and creative</p>
      </div>
      </div>
      <div className='react'>
      <img className='react-img' src={js_logo} alt="reacts js"/>
        <div className='react-info'>
      <h3>JavaScript</h3>
      <p>Make site dynamic using JavaScript</p>
      </div>
      <img className='react-img-2' src={php_logo} alt="reacts js"/>
        <div className='react-info'>
      <h3>PHP</h3>
      <p>Connect website with database</p>
      </div>
      </div>
      <div className='react'>
      <img className='react-img' src={react_icon} alt="reacts js"/>
        <div className='react-info'>
      <h3>React Js</h3>
      <p>Create website with modern javascript framework</p>
      </div>
      <img className='react-img-2 bootstrap-image' src={bootstrap_logo} alt="reacts js"/>
        <div className='react-info'>
      <h3>Bootstrap</h3>
      <p>Make website using Css framework Bootstrap</p>
      </div>
      </div>
    </div>
  )
}