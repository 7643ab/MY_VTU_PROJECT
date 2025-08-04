import {Carousel,Row,Col,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";



const HomeScreen = ()=>{
    return(
        <>
        
       <div>
        <marquee>VTU Results 2025 out - Check Exam Results Here!!!! <Link to="/result/LoginPage">Click here...</Link>  Best of Luck!!!
         </marquee>
         </div>
         <div>
                <Carousel>
               <Carousel.Item>
                 <img  height="550px"
                className="d-block w-100"
                 src="/images/img1.jpg"
                 alt="First slide" />
              
                </Carousel.Item>
                <Carousel.Item>
               <img   height="550px"
                className="d-block w-100"
                src="/images/img2.jpg"
                alt="Second slide" />

               
               </Carousel.Item>
               <Carousel.Item>
               <img  height="550px"
               className="d-block w-100"
               src="/images/img3.jpg"
               alt="Third slide" />

              
               </Carousel.Item>
               <Carousel.Item>
               <img  height="550px"
               className="d-block w-100"
               src="/images/img4.jpg"
               alt="Third slide" />

              
               </Carousel.Item>
               <Carousel.Item>
               <img  height="550px"
               className="d-block w-100"
               src="/images/img5.jpg"
               alt="Third slide" />

              
               </Carousel.Item>
                </Carousel>
            </div>
            <br/>
            <div>
                <Row>
                    <Col>
                    
                        <h3><Link to='/about'>Vision</Link></h3>
                        <p className='p-style'>Visvesvaraya Technological University (VTU) was established by the Government of Karnataka on 1 April 1998 with its headquarters at Belagavi,
                             as per the provisions of the Visvesvaraya Technological University Act, 1994, 
                             an Act to establish and incorporate a university in the State of Karnataka for the development of engineering,
                              technology and allied sciences. For effective administration,
                             four regional offices at the four revenue divisional headquarters, namely, Belagavi, Bangalore, Mysore and Gulbarga were established. </p>
                         <Link to='/about' className='btn btn-warning'>Read More</Link>
                    </Col>
                    <Col >
                   
                        <h3><Link to='/about'>Mission</Link></h3>
                        <p className='p-style' >
                        Visvesvaraya Technological University (VTU) was established by the Government of Karnataka on 1 April 1998 with its headquarters at Belagavi,
                             as per the provisions of the Visvesvaraya Technological University Act, 1994, 
                             an Act to establish and incorporate a university in the State of Karnataka for the development of engineering,
                              technology and allied sciences. For effective administration,
                             four regional offices at the four revenue divisional headquarters, namely, Belagavi, Bangalore, Mysore and Gulbarga were established. </p>
                           <Link to='/about' className='btn btn-warning'>Read More</Link>
                    </Col>
                    <Col>
                        <h3><Link to='/about'>Mandate</Link></h3>
                        <p className='p-style'>Visvesvaraya Technological University (VTU) was established by the Government of Karnataka on 1 April 1998 with its headquarters at Belagavi,
                             as per the provisions of the Visvesvaraya Technological University Act, 1994, 
                             an Act to establish and incorporate a university in the State of Karnataka for the development of engineering,
                              technology and allied sciences. For effective administration,
                             four regional offices at the four revenue divisional headquarters, namely, Belagavi, Bangalore, Mysore and Gulbarga were established. </p>
                            <Link to='/about' className='btn btn-warning'>Read More</Link>
                    </Col>
                </Row>
            </div>  

              
        
        </>

       
       
    )
}

export default HomeScreen;