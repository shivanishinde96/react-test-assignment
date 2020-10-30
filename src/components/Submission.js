import React, { Component } from 'react'
import Dialog from './Dialog'
class Submission extends Component {
    state = {
        isOpen: false
    }

    back = e => {
        e.preventDefault()
        this.props.prevPage()
    }
    render() {
        const { info } = this.props


        return (
            <div>
                <ul class='list-group'>
                    <li class='list-group-item'>FirstName : {info.firstName}</li>
                    <li class='list-group-item'>LastName : {info.lastName}</li>
                    <li class='list-group-item'>Email : {info.email}</li>
                    <li class='list-group-item'>Mobile : {info.mobile}</li>
                    <li class='list-group-item'>Date Of Birth : {info.dateOfBirth}</li>
                    <li class='list-group-item'>City : {info.currentCity}</li>
                    <li class='list-group-item'>Company Name : {info.companyName}</li>
                    <li class='list-group-item'>Job Title : {info.jobTitle}</li>
                    <li class='list-group-item'>Social Profile Link 1 : {info.profilelink1}</li>
                    <li class='list-group-item'>Social Profile Link 2 : {info.profilelink2}</li>
                    <li class='list-group-item'>Summary : {info.summary}</li>
                    <li class='list-group-item'>Ratings : {this.props.labels}</li>

                </ul>
                <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                    Thank You! Your Form is submitted successfully
                </Dialog>
                <br />
                <div className='row'>
                    <div className='col-6'>
                        <button className='btn-dark' onClick={this.back}>Back</button>
                    </div>
                    <div className='col-6 text-right'>
                        <button className='btn-dark' onClick={(e) => this.setState({ isOpen: true })}>Submit</button>
                    </div>

                </div>


            </div>
        )
    }
}

export default Submission