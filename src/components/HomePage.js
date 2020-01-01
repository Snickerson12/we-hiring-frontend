import React, { Component } from 'react';
import '../App.css';
import SearchForm from './SearchForm';
import HomeInfo from './HomeInfo';

const API = 'http://localhost:3000/jobs'

class HomePage extends Component {

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

  handleSearch = (filter) => {
    const allJobs = this.state.jobs.slice()
    const filteredJobs = allJobs.filter(job => {
      return ((job.employer.location.toLowerCase() === filter.location.toLowerCase()) && (job.field.toLowerCase() === filter.field.toLowerCase()))
    })
  
    this.props.history.push({pathname: '/searchResults', state: {filteredJobs: filteredJobs}})
    // return <SearchResults filteredJobs={this.state.filteredJobs}/>
  }
  
  
  
  render() {
    return (
      <div>
        <div className="splash">
          <SearchForm jobs={this.state.jobs} handleSearch={this.handleSearch} filteredJobs={this.state.filteredJobs}/>
        </div>
        < HomeInfo />
      </div>
    )

  }
}
export default HomePage