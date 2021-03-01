import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Product = (props) => {
    const {image, name, salary, email} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="player">
            <div>
                <img src={image} alt=""/>
            </div>
            <div className="text-align">
            <h2 className="player-name">{name}</h2>
            <h3><small>Salary: ${salary} million</small></h3>
            <p>Email: {email}</p>
            <button className="main-button" onClick={() => handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faPlus} /> Add Player </button>
            </div>
        </div>
    );
};

export default Product;