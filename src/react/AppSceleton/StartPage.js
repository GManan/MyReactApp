import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { dadJokeFetch } from "../AppSceleton/fetchDadJokes";
const StartPage = () => {
    const username = useSelector((state) => state.auth.user);
    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [joke, setJoke] = useState("");

    const fetchDadJoke = () => {
        dadJokeFetch.getTheJoke()
            .then(jokeResponse => {

                setJoke(jokeResponse.data.joke);
                console.log("jokeeee", joke)

                // Do something with the joke, e.g., update the UI.
            })
            .catch(error => {
                console.error("Error fetching dad joke", error);
            });
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Welcome to the homepage, {username}</h1>
            <p>
                I didn't have time to create a good starting page, so here's a button to fetch you some dad jokes:
            </p>
            <button className="btn btn-primary mb-3" onClick={fetchDadJoke}>
                Fetch Dad Joke
            </button>

            {joke && (
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">{joke}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StartPage;
