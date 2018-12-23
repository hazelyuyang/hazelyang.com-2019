import React from 'react'
import './List.css'

const List = props => (
    <ul className="CareerList">
        <li>{props.jobtitle}, <a href={props.link}>{props.company}</a></li>
        <p className="date">{props.date}</p>
    </ul>
)

export default List