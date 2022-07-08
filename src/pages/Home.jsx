import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SimpsonQuoteDisplay from "../components/SimpsonQuoteDisplay";

const Home = () => {
  const [quote, setQuote] = useState('');
  const URL = 'https://simpsons-quotes-api.herokuapp.com/quotes';
  const getQuote = () => {
    axios
      .get(URL)
      .then((response) => {
        return setQuote(response.data[0]);
      })
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <h1>Get Simpson's quotes</h1>
      {
        quote && (
          <div>
            <button type="button" onClick={() => getQuote()}>Get random quote</button>
            <SimpsonQuoteDisplay quote={quote} />
          </div>
        )
      }
    </>
  );
}

export default Home;
