import React, { useEffect, useState } from 'react';
import './SWC.scss';

const urls = [
    'https://swapi.dev/api/films/4',
    'https://swapi.dev/api/films/5',
    'https://swapi.dev/api/films/6',
    'https://swapi.dev/api/films/1',
    'https://swapi.dev/api/films/2',
    'https://swapi.dev/api/films/3',
    'https://swapi.dev/api/films/7',
    'https://swapi.dev/api/films/8',
    'https://swapi.dev/api/films/9',
];

export default function SWC() {
    const [movies, setMovies] = useState<{ [key: string]: any }[]>([]);

    useEffect(() => {
        urls.map(async (url) => {
            const r = await fetch(url);
            const d = await r.json();
            if (!d.detail) {
                const cArr: object[] = [];
                await d.characters?.map(async (cUrl: string) => {
                    const r1 = await fetch(cUrl);
                    const d1 = await r1.json();
                    cArr.push(d1);
                });
                d.characters = cArr;
                setMovies(prev => [...prev, d]);
            }
        });
    }, []);

    return (
        <div className='page'>
            <h1>Star Wars Movies</h1>
            <div className='cards'>
                {movies.map((li, i) => (
                    <div key={i} className='movie-card'>
                        <strong>{li.episode_id}. {li.title}</strong><br />
                        {sAB(li.characters).map(x => x.name).join(', ')}
                    </div>
                ))}
            </div>
        </div>
    );
}






const sAB = (l: any) => {
    let nl = [...l]
    let t = {}

    for (let i = 0; i < nl.length; i++) {
        for (let j = i + 1; j < nl.length; j++) {
            if (nl[i].name > nl[j].name) {
                t = nl[i];
                nl[i] = nl[j];
                nl[j] = t;
            }
        }
    }
    return nl
};