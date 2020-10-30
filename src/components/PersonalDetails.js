import React, { Component } from 'react'
import { CITY_LIST } from './CITY_LIST'


class PersonalDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextPage()
    }

    render() {
        const { info, handleChange, handleChangeSelection } = this.props

        return (
            <div className='form-container'>
                <h1>User Information</h1>
                <div className='form-group'>
                    <label htmlFor='firstName'>FirstName</label>
                    <input type='text' className='form-control' name='firstName' value={info.firstName}
                        onChange={handleChange('firstName')} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>LastName</label>
                    <input type='text' className='form-control' name='lastName' value={info.lastName}
                        onChange={handleChange('lastName')} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control' name='email' value={info.email}
                        onChange={handleChange('email')} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='mobile'>Mobile</label>
                    <input type='tel' className='form-control' name='mobile' value={info.mobile}
                        onChange={handleChange('mobile')} required />
                </div>


                <div className='form-group'>
                    <label htmlFor='dateOfBirth'>Date Of Birth </label>
                    <input type='date' name='dateOfBirth' className='form-control' value={info.dateOfBirth}
                        onChange={handleChange('dateOfBirth')} required />
                </div>


                <div className='form-group'>
                    <label htmlFor='currentCity'>Current City </label>
                    <select
                        value={info.currentCity}
                        className='text-input form-control'
                        onChange={(event) => { handleChangeSelection(event.target.value) }}
                    >

                        <option >Select City Name</option>
                        {
                            CITY_LIST.map((city) => {
                                return <option value={city.name} key={city.id}>{city.name}</option>
                            })
                        }
                    </select>
                </div>

                <div className='row'>
                    <div className='col text-right'>
                        <button className='btn-dark' onClick={this.continue}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalDetails