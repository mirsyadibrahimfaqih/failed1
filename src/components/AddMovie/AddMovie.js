import React, { useState } from 'react';
import Button from '../ui/Button';
import styled from 'styled-components';

const AddMovie = (props) => {
    const { movies, setMovies } = props;

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    
    const handleImage = (e) => {
        setImage(e.target.value);
    };
    

    
    const handleDate = (e) => {
        setDate(e.target.value);
    };
    const handleGenre = (e) => {
        setGenre(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "" && date === "") {
            alert("title dan date kosong");
        } else if (title === "") {
            alert("title kosong");
        } else if (date === "") {
            alert("date kosong");
        }else if (image ===""){
            alert("link kosong")
        } 
        else if (genre ===""){
            alert("genre kosong")
        }else {
            const movie = {
                id: 11,
                title: title,
                date: date,
                image: image,
                genre: genre, // Include the genre in the movie object
            };
            setMovies([...movies, movie]);
            alert("Movies baru telah ditambahkan")
        }
    };

    const genreOptions = ["Action","Thriller","Horror","Romance","Crime","Adventure","Mystery","Animation","Famili","Biography","History","Documentary","Wrestling","War","Music", "Comedy", "Drama", "Sci-Fi", "Fantasy", "Supsense","Short","Western","Musical","Science Fiction","Romance","Film-noir","Tv Movie","Life","Historical","School","Supernatural","Youth","Demons","News","Busines","Shounen","Mature","Psychological","Wuxia","Melodrama","Magic","Sports","Mecha","Friendship","Medical","Adult","Slice Of Life","Military","Live Action","Kids","Super Power","Shoujo","Samurai","Vampire","Game","Parody","Shounen","Seinen","Food","Investigation","Mandarin","Talk"]; // Add your list of genres

    return (
        <AddMovieStyle >
            <div className='container'>
            <form className="addmovie" onSubmit={handleSubmit}>
                <h2 className="addmovie__title">Ad Movie</h2>
                <input className="addmovie__input" id='title' type='text' value={title} onChange={handleTitle} placeholder="Masukkan judul" />
                <input className="addmovie__input" id='image' type='text' value={image} onChange={handleImage} placeholder="Masukkan link" />
                <select className="addmovie__input" id='genre' value={genre} onChange={handleGenre}>
                    <option value="" disabled>Pilih genre</option>
                    {genreOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                <input className="addmovie__input" id='date' type='date' value={date} onChange={handleDate} />
                <Button variant = "secondary">Simpan</Button>
            </form>
            </div>
        </AddMovieStyle>
    );
};

const AddMovieStyle = styled.div`
.container {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.addmovie {
    margin: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    border-radius: 15px;
    border-style: solid;
    background-color: rgb(17, 66, 171);
    border-color: rgb(255, 255, 255);
}

.addmovie__title {
    margin-top: 1rem;
    color: white;
    text-align: center;
    font-size: 1.6rem;
}

.addmovie__input {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 2px;
    margin: 1rem;
    width: 250px;
    height: 30px;
}



@media (min-width: 768px) {
    .addmovie {
        margin: 8px;
        max-width: 330px;
        height: auto;
    }
    .addmovie__input {
        width: 260px;
    }
}
`

export default AddMovie;
