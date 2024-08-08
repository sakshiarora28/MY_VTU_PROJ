import React ,{useState,useEffect}from "react";
import { Row,Col,Form, FormGroup, FormLabel } from "react-bootstrap";
import TableData from "./TableData";
import axios from 'axios';
import { useParams } from "react-router-dom";

const RessultPage = () =>{

    const[studentDetails,setStudentDetails] = useState([])

    const {id} = useParams()
    useEffect(() =>{
        axios.get('http://localhost:3001/studentInfo')
        .then(response =>{
            response.data.map((data)=>{
                if( data.RegistrationID === id){
                    setStudentDetails(data)
                }
            })
        }).catch((error) => console.log("error",error))
    },[])
    console.log("state",studentDetails)
    return(
        <>
        <Row className="justify-content-center my-4">
            <Col sm={12} md={6}>
            <h4>Visvesvararya Technological University</h4>
            <h6 style={{marginLeft:"4rem",fontSize:"15px"}}>VII Sem B.E Examination Result, Nov/Dec-2024</h6>
            </Col>
        </Row>

        <Row>
            <Col sm={12} md={6}>
            <FormGroup>
                <FormLabel>Student Name:</FormLabel>
                <FormLabel style={{marginLeft:"4.5rem"}}>{studentDetails.studentName}</FormLabel><br/>
                <FormLabel>Father's/Mother's Name: </FormLabel>
                <FormLabel style={{marginLeft:"0.5rem"}}> {studentDetails.FatherName}</FormLabel><br/>
                <FormLabel>College Name:</FormLabel>
                <FormLabel style={{marginLeft:"4.5rem"}}>{studentDetails.CollegeName}</FormLabel>
            </FormGroup>

            </Col>

            <Col sm={12} md={6}>
            <FormGroup>
                <FormLabel style={{float:"right"}}>RegistrationID : {studentDetails.RegistrationID}</FormLabel>
            </FormGroup>
            
            </Col>
        </Row>

        <Row>
            <TableData studentId = {studentDetails.RegistrationID}/>
        </Row>
        </>
    )
}

export default RessultPage;