import React from 'react'
import Tablee from './Tablee/Tablee'
import "./Tables.scss"

function Tables() {
    return (
        <div className='col-sm-12 px-5 pt-4 ' >
            <div className='col-sm-12 background-table p-3 '>
                <div className='col-sm-12 p-3 background-color-alert'>
                    <div className='row'>
                        <div className='col-sm-1 m-auto'>
                            <img src='../images/icon.png' className='img-fluid' />
                        </div>
                        <div className='col-sm-7'>
                            <h6 className='font-size-table'>Pro-tip to help you  prepare for your next appointment! </h6>
                            <h6 className='font-size-table1'>Write down business goals you hope to achieve in the next 3-6-12 months!  </h6>
                        </div>
                        <div className='col-sm-4 text-end' style={{ alignContent: "center" }}>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 pt-4 pb-4 p-0'>
                    <h4 className='upcoming'>Upcoming Appointments</h4>
                </div>
                <div className='col-sm-12 p-0 '>
                    <Tablee />
                </div>
            </div>
        </div>
    )
}

export default Tables