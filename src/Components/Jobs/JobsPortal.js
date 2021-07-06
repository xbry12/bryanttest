/*called by DashboardPortal.js*/

/*calls JobDetails which calls JobCard */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/navbar.css';

//import dummy data
import jobs from './dummyDataCall';
import display from './dummyDataDisplay';
//import components
import Search from './Search';
import JobTable from './JobTable';
import JobDetails from './JobDetails';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';

export default function NavbarPortal({ savedJobsArray }) {
  const [jobQuery, setJobQuery] = useState('');
  const [data, setData] = useState({ jobs });
  const [displayData, setDisplayData] = useState({ display })

  console.log(jobs)
  console.log(display)
  
    useEffect(() => {
        const fetchJobList = async () => {
            // const { data } = await axios('https://jsonplaceholder.typicode.com/todos/')
            // setData({data:jobs})
            // setDisplayData({displayData: display})
            console.log('fetch')
        }
        fetchJobList();
    }, [setData, setDisplayData])

    return (
        // <Container className="navbarContainer" fluid>
        <Container className="navbarContainer">
          <Row>
            <Search setJobQuery={setJobQuery} />
          </Row>
          <Row className = "jobResultsRow">
            <Col className="jobColOne">
              <Row>
                <h1 id= 'title2_text'>Job Openings</h1>
                <JobDetails data={data} savedJobsArray={savedJobsArray}/>
              </Row>
            </Col>
            <Col className="jobColTwo" xs={8} sm={8} md={8} lg={8}>
              <Row>
                <Tabs>
                  <Tab tabClassName='jobTabs' eventKey="Jobs" title="Jobs"></Tab>
                  {/* <Tab tabClassName='jobTabs' eventKey="SaveJobs" title="Saved Jobs"></Tab> */}
                </Tabs>
              </Row>
              <Row>
                <JobTable displayData={displayData} savedJobsArray={savedJobsArray}/>
              </Row>
            </Col>
          </Row>
        </Container>
    )
}
