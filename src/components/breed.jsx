import React from 'react'

import '../app-style.scss'

const Breed = (props) => {
    return (
        <div className="dog-images-container"> 
            <span className="back-btn" onClick={()=>props.setBreedData(null)}>{'< Back'}</span> 
            <ul>
                {props?.breedData?.map((item, index) => (
                    <li key={index}>
                        <img src={item} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Breed
