import { useEffect, useState } from 'react';
import { kjv } from '../data/kjv.js';

const lines = kjv.split('\n');

export default function useBible({ reference }) {
    const [verse, setVerse] = useState('');

    useEffect(() => {
        const line = lines.find((l) => { return l.includes(reference) });
        const [_reference, _verse] = line.split('\t');
        console.log(_reference);
        setVerse(_verse);
    }, [reference]);

    return { verse };
};