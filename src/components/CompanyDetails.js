import React, { Component } from 'react'
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
const Handle = Slider.Handle;
const HandleHOC = props => {
    const { value, dragging, index, tooltipPrefix, ...restProps } = props;
    return (
        <Tooltip
            prefixCls='rc-slider-tooltip'
            overlay={`${tooltipPrefix} Level ${value}`}
            visible={true}
            value={value}
            placement='top'
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};
class CompanyDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextPage()
    }
    back = e => {
        e.preventDefault()
        this.props.prevPage()
    }

    render() {
        const { info, handleChange } = this.props

        return (
            <div className='form-container'>
                <h1>Company Details</h1>
                <div className='form-group'>
                    <label htmlFor='companyName'>Company Name</label>
                    <input type='text' className='form-control' name='companyName' value={info.companyName}
                        onChange={handleChange('companyName')} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='jobTitle'>Job Title</label>
                    <input type='text' className='form-control' name='jobTitle' value={info.jobTitle}
                        onChange={handleChange('jobTitle')} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='profilelink1'>Social Profile Link 1(GitHub)</label>
                    <input type='text' className='form-control' name='profilelink1' value={info.profilelink1}
                        onChange={handleChange('profilelink1')} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='profilelink2'>Social Profile Link 2(Twitter)</label>
                    <input type='text' className='form-control' name='profilelink2' value={info.profilelink2}
                        onChange={handleChange('profilelink2')} required />
                </div>
                <div>
                <label htmlFor='rating'>Rate your expertise in React</label>
                    <Slider
                        min={this.props.min}
                        max={this.props.max}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        step={1}
                        handle={props => <HandleHOC tooltipPrefix={this.props.labels}  {...props} />}
                        marks={{
                            [this.props.min]: { label: 'BEGINNER' },
                            [this.props.max]: { label: 'EXPERT' }
                        }}
                    />
                </div><br />
                <div className='form-group'>
                    <label htmlFor='summary'>Job Title</label>
                    <textarea type='text' className='form-control' name='summary' value={info.summary}
                        onChange={handleChange('summary')} rows='4' cols='40' required />
                </div>

                <div className='row'>
                    <div className='col-6'>
                        <button className='btn-dark' onClick={this.back}>Back</button>
                    </div>
                    <div className='col-6 text-right'>
                        <button className='btn-dark' onClick={this.continue}>Next</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default CompanyDetails
