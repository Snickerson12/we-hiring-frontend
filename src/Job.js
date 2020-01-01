import React, { Component } from 'react'
import JobsIndex from './components/JobsIndex'

const API = 'http://localhost:3000/jobs'

class Job extends Component {
  state = {
    jobs: []
  }

  // async componentDidMount() {
  //   let resp = await fetch(API)
  //   let jobs = await resp.json()
  //   this.setState({
  //     jobs
  //   })
  // }

  async fetchJobs() {
    let resp = await fetch(API)
    let jobs = await resp.json()
    this.setState({
      jobs
    })
  }

  render() {
    this.fetchJobs()
    const jobs = this.state.jobs.map(job => {
      //sends props to JobsIndex
      return <JobsIndex routerParams={this.props} job={job} user={this.props.user} updateAuth={this.props.updateAuth}/>

    })

    return (
      <div className='jobs-container'>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Posted Jobs</h1>
            <p className="lead">View posted jobs below - login to apply and view positions you have applied for.</p>
          </div>
        </div>        
        {jobs}
      </div>
    )
  }
}

export default Job