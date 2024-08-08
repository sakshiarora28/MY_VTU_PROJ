import React ,{useState}from "react";
import { Link ,useNavigate,useParams} from "react-router-dom";
import { Row,Col, Form, Button, Alert } from "react-bootstrap";
import axios from 'axios';

const ResultLoginPage = () =>{

    const[registerInput,setRegisterInput] = useState("")
    const[error,setError] = useState("")

    const navigate = useNavigate()

    const value = useParams()

    const submitHandler = (e) =>{
        e.preventDefault()
        if(registerInput === ''){
            setError("Please enter Registration Number")
        }else{
            axios.get('http://localhost:3001/studentInfo')
            .then((response) => {
                console.log("res",response.data)
            response.data.map((data,index) =>{
                if(data.RegistrationID === registerInput){
                    navigate(`/resultpage/${registerInput}`)
                }else{
                    setError("Invalid Registration No.")
                }
              })
            })
        }}
    
    return(
        <>
        <Link to='/' 
        className="btn btn-dark"
        style={{marginTop:'1rem'}}>Go Back</Link>

        <Row className="text-center">
            <Col>
            <h3>Check your Results here...</h3>
          
            </Col>
        </Row>
        <br/>

        <Row>
            <Col></Col>
            <Col style={{marginLeft:"-22rem"}}>
            <Form onSubmit={(e) =>submitHandler(e)}>
                <Form.Label>Enter your Registration Number:</Form.Label><br/>
                <Form.Control type="text" placeholder="Enter your Registration No."
                style={{width:"70%"}}
                value={registerInput}
                onChange={(e) =>setRegisterInput(e.target.value)}>
                </Form.Control>
                <Button type="submit" style={{marginTop:"1rem"}}>Submit</Button>
            </Form>
            
            </Col>
        </Row>
        <Row className="justify-content-center my-3">
        { error? <Alert variant="danger">{error}</Alert> : ''}
        </Row>
       
        </>
    )
}
export default ResultLoginPage;