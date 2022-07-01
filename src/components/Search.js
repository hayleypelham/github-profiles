import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
    return (
        <main>
            <section className="mt-5 h-100 d-flex justify-content-center">
                <label htmlFor="usernameSearch"><h2>Search</h2></label>
                <input id="usernameSearch" type="text"></input>
                <button>Go</button>
            </section>
        </main> 
    );
}

export default Search;