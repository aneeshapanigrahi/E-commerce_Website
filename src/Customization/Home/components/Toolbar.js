import React from 'react'
import DrawerToggleButton from './Togglebtn';
import './Toolbar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            
        </nav>
    </header>
)

export default toolbar