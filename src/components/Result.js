import {useEffect, useState} from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Result = ({username}) => {
    const [githubUser, setGithubUser] = useState({});
    const [githubRepos, setGithubRepos] = useState([]);
    let userNotFound = false;

    async function getGithubUser (username) {
        try {
            const data = await fetch(`https://api.github.com/users/${username}`);
            if (!data.ok) {
                userNotFound = true;
            }
            data.json().then((response) => setGithubUser(response));
            const repoData = await fetch(`https://api.github.com/users/${username}/repos?sort=created&direction=desc`);
            repoData.json().then((response) => { 
                try {
                    setGithubRepos(response.slice(0,4));
                } catch (err) {
                    userNotFound = true;
                }
            });
        } catch (err) {
            userNotFound = true;
        }
        if (userNotFound) alert("No user found for that username");
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
                                <Card.Title><h3><strong>{username}</strong></h3></Card.Title>
                                <ul className="mt-3">
                                    <li><b>Followers</b> {githubUser.followers}</li>
                                    <li><b>Repositories</b> {githubUser.public_repos}</li>
                                </ul>
                                <h4>Most recent repos</h4>
                                <ul>
                                    <li></li>
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