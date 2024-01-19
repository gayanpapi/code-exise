"use strict";
const band = {
    members: {
        current: [
            { name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass'] },
            { name: 'Lucia', age: 49, plays: ['vocals', 'synth'] },
            { name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth'] },
            { name: 'Steve', age: 55, plays: ['guitar'] }
        ],
        past: [
            { name: 'Raymond', age: 57, plays: ['vocals', 'synth'] },
            { name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth'] },
            { name: 'Gunter', age: 57, plays: ['guitar', 'synth'] }
        ]
    }
};
function getAllMembers(members) {
    const allMembers = [...members.current, ...members.past];
    return allMembers
        .sort((a, b) => b.age - a.age || a.name.localeCompare(b.name))
        .map(member => member.name.toLowerCase());
}
function getPlays(members) {
    const plays = {};
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
const expected = {
    members: {
        ...band.members,
        all: getAllMembers(band.members)
    },
    plays: getPlays(band.members)
};
console.log(expected);
