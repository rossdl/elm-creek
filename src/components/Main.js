import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/casper-unsplash.jpg'
import pic02 from '../images/florian-unsplash.jpg'
import pic03 from '../images/markus-unsplash.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>We specialize in helping small businesses meet their unique software and hardware custom application needs. We understand small business and strive to understand your specific needs to develop an application that is right for you. We have a small staff of engineers that are here to help you get a custom software solution developed for you.</p>
          <p>No job is too big or too small, so if you are in the market for a custom solution and don’t have the resources to hire a dedicated development team, please contact us now for a free quote.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>We have many years of experience creating Custom Web Applications for small businesses. We have the know how to create web apps that utilize the new technology of Cloud Computing. If your custom application requires it to be published on the internet we will work with you to get this all up and running so all your potential customers will have full access.</p>
          <p>Elm Creek Consulting performs Quality Assurance in our applications in three ways. First, we unit test. This is where our developers write tests into the code itself. It is the first line of defense, but it only addresses certain potential flaws within the application. The second type of testing we do is manual testing. This involves one of our Quality Assurance specialists loading the application, and verifying that the application passes the test cases we have created. This is an important step, but one that is absolutely critical to the final quality of the product. Our final testing phase comes after the installation of the software/hardware solutions we implemented to make sure everything is setup and performing to the expectation of our customer.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Elm Creek Consulting employees have spent over 30 years on the front lines of corporate and business technological growth. From custom programming, systems design, development, project management and implementation, to acceptance testing, the professionals at Elm Creek Consulting have gained the expertise necessary to create quality systems. The Elm Creek Consulting professional team is available to design, develop and implement small or large systems. We will provide technical assistance to developing a custom business solution for your specific operation. Elm Creek Consulting has the experience and expertise to accomplish the task.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>Email us at <a href="mailto:info@elmcreekconsulting.com">info@elmcreekconsulting.com</a></p>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main