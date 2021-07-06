import React, { useState, useEffect } from 'react'
import { IconContext } from 'react-icons/lib';
import '../../css/dashboard.css';
import {
    BsEyeSlash,
    BsPencil,
    BsEnvelope
 } from 'react-icons/bs';

import {
    Table,
    Button,
    Dropdown
} from 'react-bootstrap';

function DashBoard({ savedJobsArray }) {
    const [status, setStatus] = useState('');
    const [contactInfo, setContactInfo] = useState([]);
    const [comment, setComment] = useState('');
    const [editJob, setEditJob] = useState({});
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactLinkedIn, setContactLinkedIn] = useState('');

    const statusChange = (e) => {
        setStatus(e.target.value)
    };

    const contactInfoChange = (e) => {
        setContactInfo(e.target.value);
        console.log(contactInfo)
    };

    const commentChange = (e) => {
        setComment(e.target.value);
    };

    const contactNameChange = (e) => {
        setContactName(e.target.value)
        console.log(contactName)
    };

    const contactEmailChange = (e) => {
        setContactEmail(e.target.value)
        console.log(contactEmail)
    }

    const contactLinkedInChange = (e) => {
        setContactLinkedIn(e.target.value)
        console.log(contactLinkedIn)
    }

    const editJobChange = (index) => {
        setEditJob(savedJobsArray[index])
        editJob.status = status;
        editJob.comment = comment;
        contactInfo.push(contactName, contactEmail, contactLinkedIn)
        console.log(contactInfo)
        editJob.contact_info = contactInfo;
        console.log(editJob)
    };

    let jobsRow = savedJobsArray.map((savedJob, index) => (
            <tr>
               <IconContext.Provider>
                <td>{savedJob.title}</td>
                <td>{savedJob.company_name}</td>
                <td>{savedJob.detected_extensions.posted_at}</td>
                <td>
                    <Dropdown>
                        <Dropdown.Toggle   className="dashboardButton">
                            {/* <BsEnvelope size={20} /> */}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <input
                                name="name"
                                placeholder={savedJob.contact_info ? savedJob.contact_info[0] : "Add Name"}
                                onChange={contactNameChange}
                                type="text"
                            />
                            <input
                                name="email"
                                placeholder={savedJob.contact_info ? savedJob.contact_info[1]: "Add Email"}
                                onChange={contactEmailChange}
                                type="email"
                            />
                            <input
                                name="LinkedIn"
                                placeholder={savedJob.contact_info? savedJob.contact_info[2] : "Add LinkedIn"}
                                onChange={contactLinkedInChange}
                                type="text"
                            />
                        </Dropdown.Menu>
                    </Dropdown>
                </td>
                <td>
                    <select name="status" onChange={statusChange}>
                        <option value="none" selected disabled hidden>{savedJob.status?savedJob.status:'Default'}</option>
                        <option value="done" >Done</option>
                        <option value="follow_up">Follow Up</option>
                        <option value="act_now">Act Now</option>
                    </select>
                </td>
                <td>
                    <input placeholder={savedJob.comment? savedJob.comment: 'No Comments Yet'} onChange={commentChange}>

                    </input>
                </td>
                <td>
                    <Button className="dashboardButton" onClick={(e) => editJobChange(index)}>
                        {/* <BsPencil size={20} /> */}
                    </Button>
                </td>
                <td>
                    <Button className="dashboardButton">
                        {/* <BsEyeSlash size={20} /> */}
                    </Button>
                </td>
                </IconContext.Provider>
            </tr>
    ))
    return (
            <Table>
                <thead className = 'logHead'>
                    <tr>
                        <th>Jobs You Applied</th>
                        <th>Company</th>
                        <th>Date</th>
                        <th>Contact Info</th>
                        <th>Status</th>
                        <th>Comments</th>
                        <th>Edit</th>
                        <th>Hide</th>
                    </tr>
                </thead>
                <tbody className = 'logBody'>
                    {jobsRow}
                </tbody>
            </Table>
    )
}

export default DashBoard
