import {Table} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from "axios";
import {toWords} from 'number-to-words';

const TableData = ({studentId}) =>{
  // console.log("id:",studentId)

  const[resultDetails,setResultDetails] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3002/studentInfo")
    .then((response)=>{
      console.log('ress:',response.data)
      
      let temp= response.data.filter((d) => d.registerId === studentId)
       setResultDetails(temp)
    })
    .catch((error)=>console.log("err:",error) )
  },[studentId])

  console.log("state2",resultDetails)


  const getTotalMarks = (value) => {
      console.log("value",value)
       let sum = 0
       resultDetails.forEach((d)=>{
        sum += parseInt(d[value])
       })
       return sum
  }

  const Percentage = ((getTotalMarks('obtained_marks')/getTotalMarks('max_marks')) * 100).toFixed(2)

    return(
        <>
         <Table className='my-5 ' responsive bordered>
            <thead style={{textAlign:'center'}} >
                <tr >
                    <th>Sl No</th>
                    <th colSpan={2} style={{textAlign:'center'}} >Subject </th>
                    <th colSpan={3}>Examination Marks Obtained </th>
                    <th style={{paddingLeft:'5rem',paddingRight:'5rem'}}>Subject Result</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th style={{paddingRight:'6rem',paddingLeft:'6rem'}} >Code</th>
                        <th style={{paddingRight:'6rem',paddingLeft:'6rem'}}>subject</th>
                        <th style={{paddingLeft:'5rem',paddingRight:'4rem'}} >Max</th>
                        <th style={{paddingLeft:'5rem',paddingRight:'4rem'}}>Min</th>
                        <th style={{paddingLeft:'5rem',paddingRight:'4rem'}}>Obtained</th>
                    </tr>
                   
                
            </thead>
            <tbody style={{textAlign:'center'}}>
                {
                  resultDetails.map((data,index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{data.code}</td>
                       <td>{data.subject}</td>
                       <td>{data.max_marks}</td>
                       <td>{data.min_marks}</td>
                       <td>{data.obtained_marks}</td>
                       <td>{data.result}</td>
                    </tr>
                  ))
                }
               
            </tbody>
            <thead>
                <tr style={{textAlign:'center'}}>
                    <th colSpan={3}>Grand Total</th>
                    <td>{getTotalMarks('max_marks')}</td>
                    <td>{getTotalMarks('min_marks')}</td>
                    <td>{getTotalMarks('obtained_marks')}</td>
                    <td>{resultDetails.some((s)=>s.result  === 'FAIL') ? "FAIL" :"PASS"}</td>
                </tr>
            </thead>
         </Table>
          
          <div style={{display:'block'}}>
            <p><b>Total Marks Obtained[in Words] : </b>{toWords(getTotalMarks('obtained_marks'))}</p><br/>
            <p><b>Result Of Semster : </b>{resultDetails.some((s)=>s.result  === 'FAIL') ? "FAIL" :"PASS"}
            </p><br/>
            <p><b>Percentage :</b> {Percentage}% </p><br/>
             <p><b>Date</b> : 02 AUG 2025</p>
             </div>
      </>
    )
}

export default TableData;