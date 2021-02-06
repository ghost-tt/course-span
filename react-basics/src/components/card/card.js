import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt="user" src={`https://robohash.org/${props.user.id}?set=set2&size=180x240`} />
        <h3>{props.user.name}</h3>
    </div>
)