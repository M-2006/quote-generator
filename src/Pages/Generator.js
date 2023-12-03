import React, {useState} from 'react';
import '../Styles/Generator.css';

function Generator() {
    const [quote, setQuote] = useState('');

    const generateQuote = () => {
        const quotes = [
        { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { id: 2, text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { id: 3, text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
        { id: 4, text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
        { id: 5, text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
        { id: 6, text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { id: 7, text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { id: 8, text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
        { id: 9, text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { id: 10, text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
        { id: 11, text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
        { id: 12, text: "Life is what happens when you're busy making other plans.", author: "Allen Saunders" },
        { id: 13, text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { id: 14, text: "Get busy living, or get busy dying.", author: "Stephen King" },
        { id: 15, text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
        { id: 16, text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
        { id: 17, text: "Don't cry because it's over, smile because it happened.", author: "Dr. Seuss" },
        { id: 18, text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
        { id: 19, text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
        { id: 20, text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { id: 21, text: "The only limit to our realization of tomorrow will be our doubts of today.", author: " Franklin D. Roosevelt" },
        { id: 22, text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: " William Butler Yeats" },
        { id: 23, text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", author: "Jordan Belfort" },
        { id: 24, text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
        { id: 25, text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { id: 26, text: "The best revenge is massive success.", author: "Frank Sinatra" },
        { id: 27, text: "Your time is limited, don't waste it living someone else's life", author: "Steve Jobs" },
        { id: 28, text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: " Ralph Waldo Emerson" },
        { id: 29, text: "You can't use up your creativity. The more you use, the more you have.", author: "Maya Angelou" },
        { id: 30, text: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa" },
        { id: 31, text: "The only place where success comes before work is in the dictionary.", author: " Vidal Sassoon" },
        { id: 32, text: "I have not failed. I've just found 10,000 ways that won't work.", author: " Thomas Edison" },
        // ... (continue adding the rest of the quotes)
        ]
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];

        setQuote(`"${selectedQuote.text}" - ${selectedQuote.author}`);
    };
    
    return (
        <div className='generator-container'>
        <button className='generate-button' onClick={generateQuote}>
            Generate Quote
        </button>
        <div className='quote-box'>{quote}</div>
        </div>
    );
}

export default Generator;
