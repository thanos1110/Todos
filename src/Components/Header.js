import React from 'react'
import PropTypes from 'prop-types'

import './Header.css'
function Header(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li><a>{props.title}</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                    <li><a>Contact</a></li>
                    {props.search ?
                        <>
                            <li><input type="text" /></li>
                            <button>Submit</button>
                        </>
                        :
                        ""}
                </ul>

            </nav>
        </div >
    )
}

export default Header

Header.defaultProps = {
    title: 'Hello',
    search: true
}

Header.propTypes = {
    title: PropTypes.string,
    search: PropTypes.bool
}
