import React, { useState, useEffect, useRef } from "react";

function Jokes() {
  const url = "https://official-joke-api.appspot.com/random_joke";

  const [joke, setJoke] = useState([]);
  const [detailed, setDetailed] = useState(false);
  const text = useRef("Show");

  function getJokeData() {
    async function fetchJoke() {
      const response = await fetch(url, {
        method: "GET",
      });
      const jokeResult = await response.json();
      console.log(jokeResult.setup);

      setJoke([...joke, jokeResult]);
    }
    fetchJoke();
  }

  function showJoke() {
    if (detailed) {
      return joke.map((jokeType) => {
        return (
          <div key={jokeType.id}>
            {" "}
            <h5 key={jokeType.id} className="text-danger">
              {jokeType.setup}
            </h5>
            <h6 key={jokeType.id} className="text-muted">
              {jokeType.punchline} 😂
            </h6>
            <hr />
          </div>
        );
      });
    } else {
      const renderedList = [];
      for (const jokeType of joke) {
        const renderedJoke = <h5 className="text-danger">{jokeType.setup}</h5>;
        renderedList.push(renderedJoke);
      }
      return renderedList;
    }
  }

  function removeJoke() {
    joke.pop();
    setJoke([...joke]);
  }

  useEffect(() => {
    console.log(detailed);
  }, [detailed]);

  function showAnsver() {
    if (detailed) {
      text.current = "Show";
      setDetailed(false);
    } else {
      text.current = "Hide";
      setDetailed(true);
    }
  }

  return (
    <div>
      <h4 className="text-muted mt-2 mb-5">Are you ready for a joke😉?</h4>
      {showJoke()}
      <button onClick={getJokeData} className="button-55 m-3">
        What about question?
      </button>

      <br />
      <button className="button-55 m-2" onClick={showAnsver}>
        {" "}
        {text.current} the answer{" "}
      </button>
      <button className="button-55 m-2" onClick={removeJoke}>
        {" "}
        Remove joke{" "}
      </button>
    </div>
  );
}

export default Jokes;
