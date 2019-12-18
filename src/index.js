

export const input = `
A   B   C
B   C   E
C   G
D   A   F
E   F
F   H
`;

export const output = `
A   B C E F G H
B   C E F G H
C   G
D   A B C E F G H
E   F H
F   H
`; 

export const main = () => output;

export const parseLine = input => input.split('\n').filter(input => input.length > 0)

