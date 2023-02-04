import react_icon from './images/icons8-react-48(1).png'
export const Services = () => {

  return (
    <div className="what-i-do">
      <div className="about-me-text">
      Services
      </div>
      <div className="what-i-do-2">
      What I Do?
      </div>
      <div className='react'>
      <img className='react-img' src={react_icon} alt="reacts js"/>
        <div className='react-info'>
      <h3>React Js</h3>
      <p>Design Frontend using Reacts Js</p>
      </div>
      </div>
    </div>
  )
}