import {Row,Col,Form} from 'react-bootstrap';
import TableData from './TableData';
import axios from "axios";
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ResultPage=()=>{

        const[studentDetails,setStudentDetails]=useState([]);

        const value = useParams()

        useEffect(() =>{
            axios.get("http://localhost:3002/studentInfo")
            .then((response)=>{
                response.data.map((data)=>{
                    if(data.registerId === value.id){
                        setStudentDetails(data)
                    }
                })
            })
        },[])

        console.log("state:",studentDetails)



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
                <Form.Label style={{marginLeft:'4.5rem'}}>{studentDetails.studentName}</Form.Label><br/>
                <Form.Label>Father's/Mothers' Name:</Form.Label>
                <Form.Label style={{marginLeft:'0.5rem'}}>{studentDetails.FatherName}</Form.Label><br/>
                <Form.Label>Collage Name:</Form.Label>
                <Form.Label style={{marginLeft:'4.5rem'}}>{studentDetails.collegeName}</Form.Label>
             </Form.Group>

            </Col>
             <Col sm={12} md={6} >
            <Form.Group>
                 <Form.Label style={{float:"right"}}>Register No: {studentDetails.registerId}</Form.Label>
                 
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <TableData  studentId = {studentDetails.registerId}/>
        </Row>
        
        </>
    )
}

export default ResultPage;