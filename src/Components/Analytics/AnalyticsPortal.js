import React, { useState } from 'react';
import '../../css/analytics.css';

import Map from './Map';
import NLP from './NLP';

import {
    Container,
    Row,
    Col,
    Tabs,
    Tab
} from 'react-bootstrap';

function AnalyticsPortal() {
    const [activeTab, setActiveTab] = useState('map')

    return (
        <Container>
            <Tabs
                id="dataTabs"
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
            >
                <Tab eventKey='map'title="Job Map">
                    <Map />
                </Tab>
                <Tab eventKey='nlp' title="NLP Analysis">
                    <NLP />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default AnalyticsPortal
