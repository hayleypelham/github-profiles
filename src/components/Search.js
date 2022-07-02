import { useState } from 'react';

import Result from './Result';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Search = () => {
    const [username, setUsername] = useState("");
    const [result, setResult] = useState({ element: <div style={{display: "none"}}/>});

    const handleSubmit = (event) => {
        event.preventDefault();
        setResult({element: <Result username={username}/>});
      }      
  
    return (
        <>
            <section id="searchSection" className="mt-5 d-flex align-items-center justify-content-center">
                <form onSubmit={handleSubmit} id="searchForm">
                    <InputGroup size="lg" className="mb-3">
                        <InputGroup.Text id="username">https://github.com/</InputGroup.Text>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            autoFocus={true}
                            value={username} 
                            onChange={(event) => setUsername(event.target.value)}
                            required={true}
                        />
                        <Button variant="primary" type="submit" value="Submit">Go</Button>
                    </InputGroup>
                </form>
            </section>
            {result.element}
        </>
    )
  }

export default Search;