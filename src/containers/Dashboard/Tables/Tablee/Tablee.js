import React from 'react'
import "./Tablee.scss"

function Tablee() {
    return (
        <div className='col-sm-12 p-0'>
            <div className='border-rad-tab '>
                <table className="table ">
                    <thead className="thead-light ">
                        <tr className='table-border'>
                            <th>Date & time <i class="fas fa-long-arrow-alt-down"></i></th>
                            <th>Attendee(s) <i class="fas fa-long-arrow-alt-down"></i></th>
                            <th>Session Type <i class="fas fa-long-arrow-alt-down"></i></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th >
                                <h5>Sept 22, 2022</h5>
                                <h6 className='color-text-gray'>11:00 AM</h6>
                            </th>
                            <td className='pt-3'>
                                <h6><img src="../images/ico1.png" className='img-fluid' />&nbsp;&nbsp;Jordan Bergen </h6>
                            </td>
                            <td className='pt-4'>
                                <h6>Therapist Session</h6>
                            </td>
                            <td>
                                <button className='btn btn-primary btn-lg button-meeting-color'> Join Meeting </button>
                            </td>
                        </tr>
                        <tr>
                            <th >
                                <h5>Sept 22, 2022</h5>
                                <h6 className='color-text-gray'>11:00 AM</h6>
                            </th>
                            <td className='pt-3'>
                                <h6><img src="../images/ico2.png" className='img-fluid' />&nbsp;&nbsp;Jordan Bergen </h6>
                            </td>
                            <td className='pt-4'>
                                <h6>Therapist Session</h6>
                            </td>
                            <td>
                                <button className='btn btn-primary btn-lg button-meeting-color'> Join Meeting </button>
                            </td>
                        </tr>
                        <tr>
                            <th >
                                <h5>Sept 22, 2022</h5>
                                <h6 className='color-text-gray'>11:00 AM</h6>
                            </th>
                            <td className='pt-3'>
                                <h6><img src="../images/ico2.png" className='img-fluid' />&nbsp;&nbsp;Jordan Bergen </h6>
                            </td>
                            <td className='pt-4'>
                                <h6>Therapist Session</h6>
                            </td>
                            <td>
                                <button className='btn btn-primary btn-lg button-meeting-color'> Join Meeting </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Tablee