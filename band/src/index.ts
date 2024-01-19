// TypeScript Interfaces
interface Member {
    name: string;
    age: number;
    plays: string[];
}

interface Members {
    current: Member[];
    past: Member[];
    all?: string[];
}

interface Band {
    members: Members;
}

interface Plays {
    [key: string]: string[];
}

interface Expected {
    members: Members;
    plays: Plays;
}

// Data
const band: Band = {
    members: {
        current: [
            {name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass']},
            {name: 'Lucia', age: 49, plays: ['vocals', 'synth']},
            {name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth']},
            {name: 'Steve', age: 55, plays: ['guitar']}
        ],
        past: [
            {name: 'Raymond', age: 57, plays: ['vocals', 'synth']},
            {name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth']},
            {name: 'Gunter', age: 57, plays: ['guitar', 'synth']}
        ]
    }
};

// Functions
function getAllMembers(members: Members): string[] {
    const allMembers = [...members.current, ...members.past];
    return allMembers
        .sort((a, b) => b.age - a.age || a.name.localeCompare(b.name))
        .map(member => member.name.toLowerCase());
}

function getPlays(members: Members): Plays {
    const plays: Plays = {};
    [members.current, members.past].flat().forEach(member => {
        member.plays.forEach(play => {
            if (!plays[play]) {
                plays[play] = [];
            }
            if (!plays[play].includes(member.name.toLowerCase())) {
                plays[play].push(member.name.toLowerCase());
            }
        });
    });
    return plays;
}

// Transformation
const expected: Expected = {
    members: {
        ...band.members,
        all: getAllMembers(band.members)
    },
    plays: getPlays(band.members)
};

// Output the result (for verification)
console.log(expected);
