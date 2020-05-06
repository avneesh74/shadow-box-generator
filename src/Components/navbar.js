import React from 'react'

const navbar = (props) => {
    return (
        <div>
                <nav style={{backgroundColor:'#006699'}}>
                <div class="nav-wrapper">
                <a href="/" className="brand-logo center">{props.logo}</a>
                </div>
            </nav>
        </div>
    )
}

export default navbar
