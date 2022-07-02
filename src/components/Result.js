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
                    <Card.Title>{username}</Card.Title>
                    <div class="container">
                        <div class="row">
                            <Card.Text class="col">
                                <ul>
                                    <li>Followers: {githubUser.followers}</li>
                                    <li>Repositories: {githubUser.public_repos}</li>
                                </ul>
                            </Card.Text>
                            <Card.Img class="col" src={githubUser.avatar_url} />
                        </div>
                    </div>
                    <Button href={githubUser.html_url} variant="secondary">Visit profile</Button>
                </Card.Body>
            </Card>
        </section>
    );
}

export default Result;