import { useCallback, useEffect, useState } from 'react';
import { kjv } from '../data/kjv.js';

const lines = kjv.split('\n');

export default function useBible({ reference }) {
    const [state, setState] = useState({});

    const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

    const parseVerseFromLine = (line) => {
        const [reference, verse] = line.split('\t');
        return { reference, verse };
    };

    const verseOfTheDay = useCallback(() => {
        const today = dayOfYear(new Date());
        const percentOfYear = today/365;
        const verseIndex = Math.round((lines.length - 2) * percentOfYear);
        const lineOfDay = lines[verseIndex];
        const { reference, verse } = parseVerseFromLine(lineOfDay);

        return { reference, verse };
    }, []);

    // const getVerseFromReference = (reference) => {
    //     const line = lines.find((line) => line.includes(reference) );
    //     const [_reference, verse] = line.split('\t');
    //     console.log(_reference);
        
    //     return { reference, verse };
    // };

    useEffect(() => {
        const { reference, verse } = verseOfTheDay();

        setState({ reference, verse });
    }, [verseOfTheDay]);

    return state;
};