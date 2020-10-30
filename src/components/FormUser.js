import React, { Component } from 'react'
import CompanyDetails from './CompanyDetails'
import PersonalDetails from './PersonalDetails'
import Submission from './Submission'

class FormUser extends Component {
    state = {
        page: 1,
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        currentCity: null,
        dateOfBirth: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
        companyName: '',
        jobTitle: '',
        profilelink1: '',
        profilelink2: '',
        summary: '',
        value: 1,
        min: 1,
        max: 5,
        labels: 'BEGINEER'
    }

    prevPage = () => {
        this.setState({
            page: this.state.page - 1
        })
    }
    nextPage = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    handleChange = input => (e) => {
        this.setState({
            [input]: e.target.value
        })
    }
    handleChangeSelection = currentCity => {
        this.setState({ currentCity: currentCity }, () => console.log(currentCity))
    }
    onValueChange = newValue => {
        if (newValue >= 1 && newValue <= 3) {
            this.setState({
                value: newValue,
                labels: 'BEGINEER'
            })
        }
        else if (newValue >= 1 && newValue <= 5) {
            this.setState({
                value: newValue,
                labels: 'EXPERT'
            })
        }
    }
    render() {
        const { firstName, lastName, email, mobile, currentCity, dateOfBirth, companyName, jobTitle, profilelink1, profilelink2, summary, page } = this.state
        const info = { firstName, lastName, email, mobile, currentCity, companyName, dateOfBirth, jobTitle, profilelink1, profilelink2, summary }
        
        switch (page) {
            case 1:
                return (
                    <PersonalDetails
                        nextPage={this.nextPage}
                        handleChange={this.handleChange}
                        handleChangeSelection={this.handleChangeSelection}
                        info={info}
                    />
                )
            case 2:
                return (
                    <CompanyDetails
                        nextPage={this.nextPage}
                        handleChange={this.handleChange}
                        prevPage={this.prevPage}
                        info={info}
                        value={this.state.value}
                        onChange={this.onValueChange}
                        min={this.state.min}
                        max={this.state.max}
                        labels={this.state.labels}
                    />

                )
            case 3:
                return (
                    <Submission
                        nextPage={this.nextPage}
                        prevPage={this.prevPage}
                        info={info}
                        value={this.state.value}
                        labels={this.state.labels}
                    />
                )
            default:
                return <FormUser/>
        }


    }
}

export default FormUser