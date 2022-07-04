import {useEffect, useState} from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Result = ({username}) => {
    const [githubInfo, setGithubInfo] = useState({});
    const [githubForkRepos, setGithubForkRepos] = useState([]);
    const [githubStarRepos, setGithubStarRepos] = useState([]);
    const [userFound, setUserFound] = useState(false);
    const [reposFound, setReposFound] = useState(false);

    const result = (githubInfo) => {
        return (
            <section id="resultsSection" className="m-auto mt-4 d-flex align-items-center justify-content-center pb-5">
                <Card className="card">
                    <Card.Header><h2>Profile</h2></Card.Header>
                    <Card.Body>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <Card.Title><h3><strong>{githubInfo.login}</strong></h3></Card.Title>
                                    <ul className="mt-3">
                                        <li><b>{githubInfo.followers}</b> followers</li>
                                        <li><b>{githubInfo.public_repos}</b> public repos</li>
                                    </ul>
                                    <h4>Most forked repos</h4>
                                    <ul>
                                        { githubForkRepos.map(element => { return ( <li key={element.id}><b>{element.forks_count}</b> <a target="_blank" rel="noreferrer" href={`https://github.com/${username}/${element.name}`}>{element.name}</a></li>)})}
                                    </ul>
                                    <h4>Most starred repos</h4>
                                    <ul>
                                        { githubStarRepos.map(element => { return ( <li key={element.id}><b>{element.stargazers_count}</b> <a target="_blank" rel="noreferrer" href={`https://github.com/${username}/${element.name}`}>{element.name}</a></li>)})}
                                    </ul>
                                </div>
                                <Card.Img id="avatar" className="col border border-2 rounded py-2" src={githubInfo.avatar_url} />
                            </div>
                        </div>
                        <Button target="_blank" rel="noreferrer" href={githubInfo.html_url} variant="primary">Visit profile</Button>
                    </Card.Body>
                </Card>
            </section>
        )
    }

    const alert = (userFound, reposFound) => {
        if (userFound === true && reposFound === false) {
            return(
                <section id="resultsSection" className="m-auto mt-4 d-flex align-items-center justify-content-center">
                    <div className="alert-warning p-5">Something went wrong fetching repos for that user</div>
                </section>
            )
        } else if (userFound === false ) {
            return(
                <section id="resultsSection" className="m-auto mt-4 d-flex align-items-center justify-content-center">
                    <div className="alert-warning p-5">No profile found for that username</div>
                </section>
            )
        }
    }

    useEffect( () => {
        async function getGithubInfo (username) {
            try {
                setUserFound(true);
                setReposFound(true);
                const data = await fetch(`https://api.github.com/users/${username}`);
                data.json().then((response) => setGithubInfo(response));
                if (data.ok) {
                    const repoForkData = await fetch(`https://api.github.com/search/repositories?q=user:${username}&sort=forks&order=desc`);
                    repoForkData.json().then((response) => { 
                        try {
                            setGithubForkRepos(response.items.slice(0,4));
                        } catch (err) {
                            setReposFound(false);
                            alert("Something went wrong when fetching user data");
                        }
                    });
                    const repoStarData = await fetch(`https://api.github.com/search/repositories?q=user:${username}&sort=stars&order=desc`);
                    repoStarData.json().then((response) => { 
                        try {
                            setGithubStarRepos(response.items.slice(0,4));
                        } catch (err) {
                            setReposFound(false);
                            alert("Something went wrong when fetching user data");
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
        getGithubInfo(username);
      }, [username]);

    return (
        <>
            { userFound === true && reposFound === true ? result(githubInfo) : alert(userFound, reposFound) }
        </>
    );
}

export default Result;