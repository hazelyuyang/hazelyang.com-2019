import React from 'react'
import Link from 'gatsby-link'
import './ContentImage.css'


const ContentImage = props => (
    <div className="ContentImage">
        <div className="ClipImage">
            <img src={props.image} />
        </div>
        <p><i>{props.description}</i></p>
    </div>
)

export default ContentImage


