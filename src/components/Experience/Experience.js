import React from "react";
import "./experience.css"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'

const Experience = () => {
    return (
        <div className="flex pl-2 justify-start align-start">
            <div className="experience flex-col p-1 shadow-md justify-end text-center items-center">
                <Card style={{width:'18rem' }} >
                    <Card.Img variant="top" src="holder/.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            This is text.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Experience