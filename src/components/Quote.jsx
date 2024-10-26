import React, { useEffect, useState } from 'react';
import "./Quote.css"

const Quote = () => {
    const [quotes, setQuotes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState(null);

    const defaultQuote = {
        content: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    };

    // Fetch quotes from the Quotable API
    const fetchQuotes = async () => {
        try {
            const response = await fetch('https://api.quotable.io/quotes?limit=100');
            if (!response.ok) {
                throw new Error('Failed to fetch quotes');
            }
            const data = await response.json();
            setQuotes(data.results);
            setCurrentIndex(Math.floor(Math.random() * data.results.length)); // Set a random initial quote
        } catch (error) {
            setError(error.message);
            // Set default quote if fetch fails
            setQuotes([defaultQuote]);
            setCurrentIndex(0);
        }
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    // Display a loading message if quotes are still being fetched
    if (!quotes.length) {
        return <div className="loader" ></div>;
    }

    return (
        <div className="quote-container">
            <p>"{quotes[currentIndex].content}"</p>
            <p>- {quotes[currentIndex].author}</p>
            <button onClick={fetchQuotes}>Fetch New Quotes</button>
            {error && <p style={{ color: 'red' }}>Error fetching quote! <div className="loader1" ></div></p>}
        </div>
    );
};

export default Quote;
