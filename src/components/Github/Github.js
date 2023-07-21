import React from "react";
import "./github.css"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Github = () => {
    const [avatarURL, setAvatarURL] = useState()
    const [githubName, setGithubName] = useState()
    const [githubBio, setGithutBio] = useState()

    useEffect(() => {
        fetch('https://api.github.com/users/kevinkhamp')
        .then((res) => res.json())
        .then(
            (result) => {
                console.log(result)
                setAvatarURL(result.avatar_url)
                setGithubName(result.name)
                setGithutBio(result.bio)
            },
            (error) => {
                console.log(error)
            }
        )
    }, [])

    return (
        <div className="inline-flex pl-2 mt-4 justify-center">
            <div className="experience flex-col p-1 shadow-md text-center items-center flex-column rounded-lg bg-neutral-900">
                <h1>Github</h1>
                <Card style={{width:'18rem' }} className='rounded-md bg-neutral-700' >
                    <Card.Img variant="top" src={avatarURL} />
                    <Card.Body>
                        <Card.Title>{githubName}</Card.Title>
                        <Card.Text>
                            {githubBio}
                        </Card.Text>
                        <Link to='hhttps://github.com/kevinkhamp' target="_blank" rel="noopener, noreferrer">
                            <Button className="mb-4 text-neutral-50">Github</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Github