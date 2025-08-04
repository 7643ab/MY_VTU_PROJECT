import {Row,Col,Form} from 'react-bootstrap';
import TableData from './TableData';

const ResultPage=()=>{
    return(
        <>
        <Row className='justify-content-center my-5'>
            <Col sm={12} md={6} >
              <h4>Visvesvaraya Technological university,Belagavi</h4>
              <h6 style={{marginLeft:'4rem', fontSize:'15px'}}>VII - Semester B.E Examination Result, July/Agust-2025</h6>
            </Col>
        </Row>
        <Row>
            <Col sm={12} md={6}>
             <Form.Group>
                <Form.Label > Student Name:</Form.Label>
                 <Form.Label style={{marginLeft:'4.5rem'}}>Mohan J</Form.Label><br/>
                  <Form.Label>Father's/Mothers' Name:</Form.Label>
                   <Form.Label style={{marginLeft:'0.5rem'}}>Sukumar Jagur</Form.Label><br/>
                    <Form.Label>Collage Name:</Form.Label>
                     <Form.Label style={{marginLeft:'4.5rem'}}>Delhi University</Form.Label>
             </Form.Group>
            </Col>
             <Col sm={12} md={6} >
            <Form.Group>
                 <Form.Label style={{float:"right"}}>Register No: 209VTU3513</Form.Label>
                 
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <TableData />
        </Row>
        
        </>
    )
}

export default ResultPage;