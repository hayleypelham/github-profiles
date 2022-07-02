import {useEffect, useState} from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Result = ({username}) => {
    const [githubUser, setGithubUser] = useState({});

    async function getGithubUser (username) {
        const data = await fetch(`https://api.github.com/users/${username}`);
        data.json().then((response) => setGithubUser(response));
    }

    useEffect( () => {
        getGithubUser(username);
      }, [username]);

    return (
        <section id="resultsSection" className="mt-4 d-flex align-items-center justify-content-center">
            <Card bg="light" text="dark" id="result">
                <Card.Header><h2>Profile</h2></Card.Header>
                <Card.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Card.Title><strong>{username}</strong></Card.Title>
                                <ul className="mt-3">
                                    <li><b>Followers</b> {githubUser.followers}</li>
                                    <li><b>Repositories</b> {githubUser.public_repos}</li>
                                </ul>
                            </div>
                            <Card.Img id="avatar" className="col" src={githubUser.avatar_url} />
                        </div>
                    </div>
                    <Button href={githubUser.html_url} variant="secondary">Visit profile</Button>
                </Card.Body>
            </Card>
        </section>
    );
}

export default Result;