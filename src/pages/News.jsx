import React, { useState, useEffect } from 'react';
import NewsItem from '../components/NewsItem';
import car from "../assets/0x0.jpg.webp"; 

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setNews(data.slice(0, 8));
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='news container-lg'>
            <h3 className='text-center m-3'>News</h3>
            {news.map(item => (
                <NewsItem key={item.id} title={item.title} body={item.body} imageUrl={car}/>
            ))}
        </div>
    );
};

export default News;