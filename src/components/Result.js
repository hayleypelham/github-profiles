import {useEffect, useState} from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Result = ({username}) => {
    const [githubUser, setGithubUser] = useState({});
    const [githubData, setGithubData] = useState([]);

    /*const fetchData = (username) => {
        return fetch(`https://api.github.com/users/${username}`)
          .then((response) => response.json())
          .then((data) => setGithubData(data));
      }      

    useEffect(() => {
        fetchData({username})
    }, []);*/
      
    return (
        <section id="resultsSection" className="mt-4 d-flex align-items-center justify-content-center">
            <Card bg="light" text="dark" id="result">
                <Card.Header>Profile</Card.Header>
                <Card.Body>
                    <Card.Title>{username}</Card.Title>
                    <Card.Text>
                        {username} <br />
                        {username}
                    </Card.Text>
                    <Button variant="secondary">Visit profile</Button>
                </Card.Body>
            </Card>
        </section>
    );
}

export default Result;