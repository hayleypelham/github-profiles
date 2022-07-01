import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Search = () => {
    return (
        <section id="searchSection" className="mt-5 d-flex align-items-center justify-content-center">
            <InputGroup size="lg" className="mb-3">
                <InputGroup.Text id="username">https://github.com/</InputGroup.Text>
                <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="username"
                autoFocus="true"
                />
                <Button variant="secondary" id="submit">
                    Button
                </Button>
            </InputGroup>
        </section>
    );
}

export default Search;