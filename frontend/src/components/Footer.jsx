import {Row,Col} from 'react-bootstrap';

const Footer=()=>{

    const currentYear = new Date().getFullYear()

    return(
        <footer>
            <Row className='text-center'>
                <Col>
                        VTU & Copy:{currentYear}
                </Col>
            </Row>
        
        </footer>
    )
}


export default Footer;