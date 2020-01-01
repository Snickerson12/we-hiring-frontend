import React, {Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    const { user } = this.props
    let loginButtons;
    if (user.id) {
      loginButtons = <Link to="/" className="btn btn-outline-success my-2 my-sm-0" onClick={this.props.handleLogout} >Logout</Link>
    } else {
      loginButtons = (
        <div className='btn'>
          <Link to="/applicantLoginForm" className="btn btn-outline-success my-2 my-sm-0">Applicant Sign In</Link>
          <Link to="/employerLoginForm" className="btn btn-outline-success my-2 my-sm-0">Employers Sign In</Link>
        </div>
      )
    }

    let userConditions;
    if (user.usertype == 'employer') {
      userConditions = <Link to="/newJob" className="btn btn-outline-success my-2 my-sm-0">Post New Job</Link>
    } else if (user.usertype == 'applicant') {
      userConditions = (
        <div className='btn'>
          <Link to="/yourJobs" className="btn btn-outline-success my-2 my-sm-0">Your Applications</Link>
          <Link to="/" className="btn btn-outline-success my-2 my-sm-0">Search Page </Link>
        </div>
      )
    
    }

      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="./" style={{fontSize: '1.75rem'}}>We Hirin'</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"/>
          <Link to="/jobs" className="btn btn-outline-success my-2 my-sm-0">Jobs</Link>        
            {userConditions}
            {loginButtons}
          
        </div>
      </nav>
    )
  }
}