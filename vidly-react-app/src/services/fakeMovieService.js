import * as genresAPI from './fakeGenreService';

const movies = [
    {
        _id: 1,
        title: 'Terminator',
        genre: { _id: 1, name: 'Action'},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: '2018-01-03T19:04:28:809Z'
    },
    {
        _id: 2,
        title: 'Spider Man',
        genre: { _id: 2, name: 'Sci-Fic'},
        numberInStock: 2,
        dailyRentalRate: 4.5,
        publishDate: '2010-01-03T19:04:28:809Z'
    },
    {
        _id: 3,
        title: 'Genisis',
        genre: { _id: 3, name: 'Cartoon'},
        numberInStock: 4,
        dailyRentalRate: 4,
        publishDate: '2013-01-03T19:04:28:809Z'
    },
    {
        _id: 4,
        title: 'Falcon',
        genre: { _id: 4, name: 'Action'},
        numberInStock: 2,
        dailyRentalRate: 3,
        publishDate: '2021-01-03T19:04:28:809Z'
    },
    {
        _id: 5,
        title: 'John Wick',
        genre: { _id: 5, name: 'Action'},
        numberInStock: 9,
        dailyRentalRate: 8.9,
        publishDate: '2012-01-03T19:04:28:809Z'
    },
    {
        _id: 6,
        title: 'Avatar',
        genre: { _id: 6, name: 'Cartoon'},
        numberInStock: 7,
        dailyRentalRate: 1.3,
        publishDate: '2001-01-03T19:04:28:809Z'
    },
    {
        _id: 7,
        title: 'Titanic',
        genre: { _id: 8, name: 'Sci-Fic'},
        numberInStock: 4,
        dailyRentalRate: 9,
        publishDate: '2011-01-03T19:04:28:809Z'
    },
    {
        _id: 8,
        title: 'Equilizer',
        genre: { _id: 8, name: 'Action'},
        numberInStock: 2,
        dailyRentalRate: 3.2,
        publishDate: '2019-01-03T10:04:28:809Z'
    }
]

export function getMovies(){
    return movies;
}

export function getMovie(id){
    return movies.find(m => m._id === id)
}