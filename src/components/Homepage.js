import React from 'react'
import {Link} from 'react-router-dom'
import { Container,Row, Col } from 'react-bootstrap'
import {FaGreaterThan,FaLessThan,FaEquals} from 'react-icons/fa'
import "./Start.css"

export default function Homepage() {
  return (
    <div>
        <Container>
            <Row>
                
                <Col xs="6">
                <div className="left vh-100 d-flex flex-column align-items-center justify-content-center">
                <h1 className='mb-3'> Guess The Number </h1>
                   <Link to="/start" className='btn btn-primary '>Start</Link>
                   <p className='mt-2'>An engaging guessing game that prompts players to input a number, and then informs them whether the entered number is higher, lower, or exactly equal to a randomly generated number. This process continues until the specified number of attempts is exhausted, enhancing the suspense and challenge of the game.</p>
                </div>
                </Col>
                <Col xs="6">
                <div className="right vh-100 d-flex align-items-center justify-content-center">
                        <Row>
                            <div className="design">
                                
                            <Col>
                                <div className="content d-flex ">
                                    <p className='content-1'> <FaGreaterThan /> </p>
                                    
                                </div>
                            </Col>
                            <Col>
                                <div className="content">
                                    <p className='content-2'><FaEquals/></p>
                                </div>
                            </Col>
                            <Col>
                                <div className="content">
                                    <p className='content-3'><FaLessThan /></p>
                                </div>
                            </Col>
                            </div>
                        </Row>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
