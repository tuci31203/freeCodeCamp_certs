import { useEffect, useState } from 'react';
import './App.css';

function App() {
  //https://api.quotable.io/random
  const defaultQuote = {
    text: "",
    author: ""
  }
  const [quote, setQuote] = useState(defaultQuote)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then((data) => {
        setQuote({
          text: data.content,
          author: data.author
        })
        console.log(data)
      })
  }

  return (
    <div id="wrapper">
      <div id="quote-box">
        <h2 id="text">{quote.text}</h2>
        <p id="author">{quote.author}</p>
        <button id="new-quote" onClick={fetchData}>New Quote</button>
        <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quote.text} id="tweet-quote">Post to twitter</a>
      </div>
    </div>
  );
}

export default App;
