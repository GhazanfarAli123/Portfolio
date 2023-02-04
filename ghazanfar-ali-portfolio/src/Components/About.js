import CountUp from 'react-countup';
export const About = () => {

  return (
    <div className="about-me" id="about-me">
      <div className="about-me-text">
        About me
      </div>
      <div className="about-me-2">
        Know Me More
      </div>
      <div className="about-me-3">
        I'm <span>Ghazanfar Ali,</span> a Front-end Developer
      </div>
      <div className="about-me-4">
        I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.

        <br /><span className="delivering">Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
        </span>
      </div>
      <div className="about-table">
        <ul>
          <li><span>Name </span>: Ghazanfar Ali</li>
          <li><span>Email </span>: <a href="ghazanfar.alizahid@gmail.com">ghazanfar.alizahid@gmail.com</a></li>
          <li><span>Age</span> : 22</li>
          <li><span>From</span> : Lahore, Pakistan</li>
        </ul>
      </div>
      <div className='counters'>
      <CountUp start={0} end={1} delay={1}>
        {({ countUpRef }) => (
          <div className='counter'>
            <span ref={countUpRef} />
            <h4>Years Experience</h4>
          </div>
        )}
      </CountUp>
      <CountUp start={0} end={10} delay={1}>
        {({ countUpRef }) => (
          <div className='counter-2'>
            <span ref={countUpRef} />
            <h4>Projects</h4>
          </div>
        )}
      </CountUp>
      </div>
    </div>
  )
}