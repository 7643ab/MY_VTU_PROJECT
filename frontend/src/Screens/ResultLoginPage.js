import {Link} from 'react-router-dom';
import {Row,Col,Form,Button} from 'react-bootstrap';

const ResultLoginPage = ()=>{
    return(
        <>
             <Link to='/' className='btn btn-dark' style={{marginTop:"1rem"}}>Go Back</Link>
             <Row className='text-center'>
                <Col>
                     <h3>Check your Results here...</h3>
                    
                </Col>
             </Row>
             <Row>

                <Col></Col>
                    <Col style={{marginLeft:'-20rem'}}>
                     <Form>
                        <Form.Label >Enter your Register No:</Form.Label><br/>
                        <Form.Control type='text' placeholder='Enter Your register no'
                        style={{width:'70%'}}/>
                        
                        <Button type="submit" style={{marginTop:"1rem"}}>Submit</Button>
                     </Form>
                     </Col>
             </Row>
        </>
    )
}

export default ResultLoginPage;