import React, { Component } from 'react'
import JobsIndex from './components/JobsIndex'
import SearchForm from './components/SearchForm'

const API = 'http://localhost:3000/jobs'

class Job extends Component {
  state = {
    jobs: []
  }

  async componentDidMount() {
    let resp = await fetch(API)
    let jobs = await resp.json()
    this.setState({
      jobs
    })
  }

  render() {
    console.log("this.state.jobs", this.state.jobs)

    const jobs = this.state.jobs.map(job => {
      //sends props to JobsIndex
      return <JobsIndex job={job} />

    })

    return (
      <div className='jobs-container'>
        {jobs}
      </div>
    )
  }
}

export default Job