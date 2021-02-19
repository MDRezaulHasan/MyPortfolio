import React from 'react'
import {Link} from 'react-router-dom'
export default function NotFoundScreen() {
    return (
        <div>
            <h1>Wops! I can not find any match!</h1>
                <Link to="/">Home</Link>
        </div>
    )
}
