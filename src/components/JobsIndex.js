import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default class JobsIndex extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            data: ''
        }
    }

    handleApply = (e) => {
        e.preventDefault()
        if (this.props.user.id) {
            const newApplication = {applicant_id: this.props.user.id, job_id: this.props.job.id, applicant_name: this.props.user.name}
            const reqObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    applicant_id: newApplication.applicant_id,
                    job_id: newApplication.job_id
                })
            }
    
            fetch('http://localhost:3000/job_applicants', reqObj)
            .then(resp => resp.json())
            .then(data => {
                console.log('index fetch data', data)
                this.props.updateAuth(data)
                // backend wired correctly
                // cal a callback functin that updates App.js state (auth) so that jobs is a reflection of curent jobs array in BE
            })
        } else {
            this.props.routerParams.history.push('/applicantLoginForm')
        }

    }

    render() {
        console.log(this.props.props)
        return(
            <div>
                <div className="ui cards" id="job-cards">
                    <div className="card" id="job-card">
                        <div className="content">
                        <div className="header">Job Title: {this.props.job.title}</div>
                        <div className="meta">Company: {this.props.job.employer.name}</div>
                        <div className="meta"> Field: {this.props.job.field}</div>
                        <div className="description">Job Description: {this.props.job.description}</div>
                        <button  onClick={this.handleApply} data={this.state.data} className="btn btn-outline-success my-2 my-sm-0">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}