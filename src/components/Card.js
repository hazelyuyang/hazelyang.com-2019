import React from 'react'
import './Card.css'
import Link from 'gatsby-link'

const Card = props => (
        <div className="Card" >
            <Link to={props.link}>
                <div className="CardInfo">
                    <h2>{props.title}</h2>
                    <h3>{props.text}</h3>
                </div>
                <div className="CardLabel">
                    <h4>{props.label}</h4>
                </div>
                <img src={props.image} />
            </Link>
        </div>
)

export default Card