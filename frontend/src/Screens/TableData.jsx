import {Table} from 'react-bootstrap';

const TableData = () =>{
    return(
        <>
         <Table className='my-5' Responsive bordered>
            <thead style={{textAlign:'center'}}>
                <tr >
                    <th>Sl No</th>
                    <th colSpan={2}>Subject
                        <th  >Code</th>
                        <th >subject</th>
                    </th>
                    
                    
                    <th colSpan={3}>Examination Marks Obtained
                        <th  >Max</th>
                        <th >Min</th>
                        <th   >Obtained</th>
                    </th>
                    <th >Subject Result</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>CSE001</td>
                  <td>JAVA</td>
                  <td>100</td>
                  <td>40</td>
                  <td>87</td>
                  <td>PASS</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>CSE001</td>
                  <td>JAVA</td>
                  <td>100</td>
                  <td>40</td>
                  <td>87</td>
                  <td>PASS</td>  
                </tr>
                <tr>
                  <td>1</td>
                  <td>CSE001</td>
                  <td>JAVA</td>
                  <td>100</td>
                  <td>40</td>
                  <td>87</td>
                  <td>PASS</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>CSE001</td>
                  <td>JAVA</td>
                  <td>100</td>
                  <td>40</td>
                  <td>87</td>
                  <td>PASS</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>CSE001</td>
                  <td>JAVA</td>
                  <td>100</td>
                  <td>40</td>
                  <td>87</td>
                  <td>PASS</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan={3}>Grand Total</th>
                    <td>400</td>
                    <td>160</td>
                    <td>348</td>
                    <td>PASS</td>
                </tr>
            </thead>
         </Table>
          
          <div style={{display:'block'}}>
            <p><b>Total Marks Obtained[in Words]</b>:
            Three Hundred Forty-Eight</p><br/>
            <p><b>Result Of Semster</b>:
            PASS</p><br/>
            <p><b>Percentage</b>: 73%</p><br/>
             <p><b>Date</b>: 02 AUG 2025</p>
             </div>
      </>
    )
}

export default TableData;