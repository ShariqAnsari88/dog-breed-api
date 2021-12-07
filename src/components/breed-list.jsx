import React from 'react'

import '../app-style.scss';

const BreedList = (props) => {

    const getSelectedBreedData = (breed) => {
        fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then((success)=> success.json())
        .then((response) => {
            console.log("response:",response);
            props.setBreedData(response.message)
        });
    }

    const clickHandler=(breed)=> {
        getSelectedBreedData(breed)
    }

    return (
        <ul className="list-of-breeds">
            {props.breedList.map((breed, index) => (
                <li onClick={()=> clickHandler(breed)} key={index}>{breed}</li>
            ))}
        </ul>
    )
}
export default BreedList
