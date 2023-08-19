import React, { useEffect, useState } from 'react'
import Link from 'react-router-dom'
import { Container,Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FaGreaterThan,FaLessThan,FaEquals} from 'react-icons/fa'
import "./Start.css"

export default function Start() {


   
    const [maxTrials,setMaxTrials] = useState(5)
    
    const [disabled,setDisabled] = useState("")
    const [randomNumber,setRandomNumber] = useState("")
    const [userNumber,setUserNumber] = useState("")
    const [items,setItems] = useState([])
    const [logo,setLogo] = useState("")
    const [wastedGuess,setWastedGuess] = useState("")
    const [correctAnswer,setCorrectAnswer] = useState("")
    const [rotateClass,setRotateClass] = useState("")
    const [response,setResponse] = useState("")
    const [disabledButton,setDisabledButton] = useState("")
    const [remainingTrials, setRemainingTrials] = useState(maxTrials);
  
    //console.log(userNumber, "i am user number")

    const handleInputChange = (event) => {
        setUserNumber(event.target.value);
      };
    console.log(randomNumber, "i am  randomNumber")

    useEffect(()=>{
        setRandomNumber(Math.floor(Math.random() * 100) +1)
    },[])

    const handleSubmit = (event)=> {
        event.preventDefault()
        setItems([...items, userNumber]);
        console.log(userNumber, "lastindex")

        if (userNumber < randomNumber){
            
            setResponse("The Number is greater than your Guess :(. Try a higher number")
            setLogo(<FaGreaterThan/>)
        }else if (userNumber > randomNumber){
            
            setResponse ("The Number is less than your Guess :(.  Try a lower number")
            setLogo(<FaLessThan/>)
        }
        else if (userNumber == randomNumber){
            setResponse("")
            setCorrectAnswer ("Your guess is correct :)")
            setRotateClass("rotate-card card")
            setLogo(<FaEquals/>)
            setDisabled("disabled")

        }
        
        setRemainingTrials(remainingTrials - 1);
        if (remainingTrials === 1 && userNumber !== randomNumber) {
            setDisabled("disabled")
            setResponse(`Out of trials! The correct number was ${randomNumber}.`
            );
        } else if (userNumber === randomNumber) {
            setCorrectAnswer(`Congratulations! You guessed the number.`);
            setLogo(<FaEquals/>)
        }
            
    }
   
    
    


  return (
    <div>
        <Container>
            <Row className='vh-100'>
               
                
                <Col xs="12" className='d-flex flex-column align-items-center justify-content-center'>
                     <h1 className='mb-5'> Guess The Number </h1>
                     <div className="card-container">
                        
               
                    <div className={rotateClass}>
                        <div className="front p-4 d-flex flex-column align-items-center justify-content-center">
                        <h6 className='text-light header-text'>Enter a number lower than 100 to Start</h6>
                        <span className='text-light response-span'>
                            {wastedGuess} <br />
                            {response}</span>
                            <div className="content text-dark">
                            {logo}
                            </div>
                        </div>
                        
                        <div className="back d-flex flex-column align-items-center justify-content-center">
                <h6>Niceee</h6>
                {correctAnswer}
                <div className="content text-success">
                            {logo}
                            </div>
                        </div>
                    </div>

                        </div>
                </Col>
                <Col xs="12">
                <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-center justify-content-center '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="number" className='number-input' value={userNumber} placeholder="Enter a Number" onChange={handleInputChange} disabled={remainingTrials === 0 || disabled === "disabled" }/>
                    <Form.Text className="text-muted">
                  
                    </Form.Text>
                </Form.Group>

                
                <Button variant="primary" className={disabled} type="submit"  disabled={remainingTrials === 0 || disabled === "disabled" }>
                    Submit
                </Button>
                {disabled === "disabled" ? (
                <Button variant="outline-danger" onClick={()=>window.location.reload()} className='m-4 text-end'    >
                    Try again
                </Button>
                ): ""}
                </Form>
                <ol className='d-flex gap-5 align-items-center text-center justify-content-center'>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
                
                </Col>
            </Row>
        </Container>
    </div>
  )
}
