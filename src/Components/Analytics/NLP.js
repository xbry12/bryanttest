import React from 'react';
import keywords from './dummyKeywords';
import {
    Table,
    Col,
    Row,
    Container
} from 'react-bootstrap';

function NLP() {
    //best to display the data via table
    // columns single-word, two-word, three-word
    // five columns (top five key phrases)
    console.log(keywords)

    let keywordsColumnOne = keywords.results_uni.map((keyword, index) => (
        <tr>
            <td>
                {keyword}
            </td>
        </tr>
    ))

    let keywordsColumnTwo = keywords.results_bi.map((keyword, index) => (     
        <tr>
            <td>
                {keyword}
            </td>
        </tr>
    ))

    let keywordsColumnThree = keywords.results_tri.map((keyword, index) => (
        <tr>
            <td>
                {keyword}
            </td>
        </tr>
    ))

    return (
        <Container className="nlpTable">
            <Row className="rowOne">
                <Col>
                    <h2>Number of Jobs Compared:</h2>
                </Col>
                <Col md="auto">
                    <h3>{keywords.num_jobs_compared}</h3>
                </Col>
            </Row>
            <Row className="rowTwo">
               <h2>Key Words</h2>
            </Row>
            <Table hover responsive borderless>
                <thead>
                    <tr>
                        <th>
                            One Word 
                        </th>
                        <th>
                            Two Words
                        </th>
                        <th>
                            Three Words
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                        {keywordsColumnOne}
                    </td>
                    <td>
                        {keywordsColumnTwo}
                    </td>
                    <td>
                        {keywordsColumnThree}
                    </td>
                </tbody>
            </Table>

        </Container>
    )
}

export default NLP
