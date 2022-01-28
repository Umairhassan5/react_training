

const genres = [
    {
        _id: 1,
        name: 'Action'
    },
    {
        _id: 2,
        name: 'Sci-Fic'
    },
    {
        _id: 3,
        name: 'Cartoon',
    },
]

export function getGenres(){
    return genres.filter( g => g)
}
