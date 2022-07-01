import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

const Search = () => {
    const [username, setUsername] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${username}`)
    }
  
    return (
    <section id="searchSection" className="mt-5 d-flex align-items-center justify-content-center">
        <form onSubmit={handleSubmit}>
            <InputGroup size="lg" className="mb-3">
                <InputGroup.Text id="username">https://github.com/</InputGroup.Text>
                <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="username"
                autoFocus={true}
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                />
                <Button variant="primary" type="submit" value="Submit">
                    Go
                </Button>
            </InputGroup>
        </form>
    </section>
    )
  }

export default Search;