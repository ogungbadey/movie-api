import React from 'react'

export default function NavBar() {
    return (
        <nav>
            <div>
                <h1>Mooovie</h1>    
            </div> 
            <div>
                <input type="text" placeholder="search"/>    
            </div> 
            <div>
                <span>Watchlist</span>
            </div>
        </nav>
    )
}
