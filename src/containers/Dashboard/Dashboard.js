import React from 'react'
import Navbar from "./Navbar/Navbar"
import "./Dashboard.scss"
import Tables from './Tables/Tables'

function Dashboard() {
    return (
        <div className='col-sm-12 p-0 mb-5'>
            <Navbar />
            <div className='col-sm-12 p-0 background-img-main'>
                <div className='col-sm-12 px-5 pt-5'>
                    <h1 className='welcome'>Welcome back, Tania! 👋</h1>
                </div>
            </div>
            <div className='col-sm-12 px-5'>
                <div className='col-sm-12 p-4 background-card'>
                    <h4 className='container-heading'>Stay on top of your wellness!</h4>
                    <div className='row mt-4'>
                        <div className='col-sm-4'>
                            <div className='col-sm-12 p-4 background-picture-card'>
                                <div className='col-sm-12 pt-2 pb-2'>
                                    <h6 className='article'>Article</h6>
                                    <h6 className='font-color'><b>8 Ways Managers Can Support Employees</b></h6>
                                </div>
                            </div>

                        </div>

                        <div className='col-sm-4'>
                            <div className='col-sm-12 p-4 background-picture-card1'>
                                <div className='col-sm-12 pt-2 pb-2'>
                                    <h6 className='article'>Article</h6>
                                    <h6 className='font-color1' ><b>Why should mental health be your business strategy? </b></h6>
                                </div>
                            </div>

                        </div>

                        <div className='col-sm-4'>
                            <div className='col-sm-12 p-4 background-picture-card2'>
                                <div className='col-sm-12 pt-2 pb-2'>
                                    <h6 className='article'>Article</h6>
                                    <h6 className='font-color2'><b>Why should mental health be your business strategy? </b></h6>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Tables />
        </div>
    )
}

export default Dashboard