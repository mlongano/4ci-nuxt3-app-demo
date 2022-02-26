import { useState } from "#app";

export const useFoo = () => {
    return useState('bar', () => 'fobar')
}