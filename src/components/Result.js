import {useEffect, useState} from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Result = ({username}) => {
    const [githubUser, setGithubUser] = useState({});
    const [githubForkRepos, setGithubForkRepos] = useState([]);
    const [githubStarRepos, setGithubStarRepos] = useState([]);
    const [userFound, setUserFound] = useState(false);

    async function getGithubUser (username) {
        try {
            setUserFound(true);
            const data = await fetch(`https://api.github.com/users/${username}`);
            data.json().then((response) => setGithubUser(response));
            if (data.ok) {
                const repoForkData = await fetch(`https://api.github.com/search/repositories?q=user:${username}&sort=forks&order=desc`);
                repoForkData.json().then((response) => { 
                    try {
                        setGithubForkRepos(response.items.slice(0,4));
                    } catch (err) {
                        setUserFound(false);
                        alert("No user found for that username");
                    }
                });
                const repoStarData = await fetch(`https://api.github.com/search/repositories?q=user:${username}&sort=stars&order=desc`);
                repoStarData.json().then((response) => { 
                    try {
                        setGithubStarRepos(response.items.slice(0,4));
                    } catch (err) {
                        setUserFound(false);
                        alert("No user found for that username");
                    }
                });
            } else {
                setUserFound(false);
                alert("No user found for that username");
            }
        } catch (err) {
            setUserFound(false);
            alert("No user found for that username");
        }
    }

    const result = (githubUser) => {
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
                                        <li><b>{githubUser.followers}</b> followers</li>
                                        <li><b>{githubUser.public_repos}</b> public repos</li>
                                    </ul>
                                    <h4>Most forked repos</h4>
                                    <ul>
                                        { githubForkRepos.map(element => { return ( <li key={element.id}><b>{element.forks_count}</b> <a target="_blank" href={`https://github.com/${username}/${element.name}`}>{element.name}</a></li>)})}
                                    </ul>
                                    <h4>Most starred repos</h4>
                                    <ul>
                                        { githubStarRepos.map(element => { return ( <li key={element.id}><b>{element.stargazers_count}</b> <a target="_blank" href={`https://github.com/${username}/${element.name}`}>{element.name}</a></li>)})}
                                    </ul>
                                </div>
                                <Card.Img id="avatar" className="col" src={githubUser.avatar_url} />
                            </div>
                        </div>
                        <Button href={githubUser.html_url} variant="secondary">Visit profile</Button>
                    </Card.Body>
                </Card>
            </section>
        )
    }

    useEffect( () => {
        getGithubUser(username);
      }, [username]);

    return (
        <>
            { userFound === true ? result(githubUser) : null }
        </>
    );
}

export default Result;