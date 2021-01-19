import React from 'react';
import { Navbar } from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar className="navbar" variant="light" sticky='top' style={{ marginBottom: "20px", backgroundColor: "#ffd662ff" }}>
                <Navbar.Brand href="/"> Mirror </Navbar.Brand>
            </Navbar>
        );
    }
}
export default Navigation