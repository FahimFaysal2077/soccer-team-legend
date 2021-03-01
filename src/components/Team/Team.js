import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/data.json';
import './Team.css';
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Team = () => {
    const [players,setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setPlayers(fakeData);
    }, [])

    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }

    return (
        <div className="team-container">
            <div className="player-container">
                {
                    players.map(player => <Player handleAddPlayer={handleAddPlayer} player={player}></Player>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Team;