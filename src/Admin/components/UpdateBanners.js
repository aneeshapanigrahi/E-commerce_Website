import React from "react";
import Axios from "axios";
import SideNav from "../SideNav";
import Toolbar from '../SidenavComponents/Toolbar';
import Backdrop from '../SidenavComponents/Backdrop';
import { Table, Button, Modal, FormControl, FormLabel, FormGroup, Col, Row, FormCheck } from "react-bootstrap";

class CustomerDetails extends React.Component {
    state = {
        banners: [],
        image: "",
        status: "",
        id: "",
        sideDrawerOpen: false,
        show: false
    };
    componentDidMount() {
        Axios.get("http://localhost:8000/banner")
            .then((res) => {
                console.log(res.data);
                this.setState({
                    banners: res.data
                });
            })
            .catch((err) => console.log(err));
    };
    handleChange = (e) => {
        if (e.target.name === "active") {
            this.setState({ id: e.target.value })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    handlePost = (e) => {
        e.preventDefault();
        this.state.image === "" ? (
            this.setState({ status: "All above fields should be filled." })
        ) : (
                Axios.post("http://localhost:8000/banner", this.state)
                    .then((res) =>
                        this.setState({ status: "Successfully updated the banner" })
                    )
                    .catch((err) => console.log(err))
            )
    };
    handleDelete = (e) => {
        e.preventDefault();
        Axios.delete(`http://localhost:8000/banner/${this.state.id}`)
            .then((res) =>
                console.log(res)
            )
            .catch((err) => console.log(err))
    };
    handleUpdate = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/banner/${this.state.id}`)
            .then((res) =>
                console.log(res)
            )
            .catch((err) => console.log(err))
    };
    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }
    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleShow = () => {
        this.setState({
            show: true
        })
    }
    render() {
        let backdrop
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        const { banners } = this.state
        const bannerImage = banners.length ? (
            banners.map((banner, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td><img style={{ maxWidth: "200px", height: "auto", border: "solid 2px #444" }} src={banner.image} alt="" /></td>
                        <td><FormCheck type='radio' value={banner._id} name="active" onChange={this.handleChange} /></td>
                        <td><Button variant="success" size="sm" style={{ margin: "10px" }} onClick={this.handleUpdate}>EDIT</Button><Button variant="danger" size="sm" style={{ margin: "10px" }} onClick={this.handleDelete}>DELETE</Button></td>
                    </tr>
                    // () => this.setState({ id: banner._id }), 
                )
            })
        ) : (<tr><td colSpan="4">Nothing to display</td></tr>)
        return (
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideNav show={this.state.sideDrawerOpen} />
                {backdrop}
                <div style={{
                    margin: " 50px auto 50px 54px", textAlign: 'center', padding: '20px 30px 20px 30px'
                }}>
                    <h1 style={{ margin: '10px auto 30px auto' }}><strong>Update Banners: </strong></h1>
                    <div style={{ boxShadow: '0 0 1px rgba(0,0,0,0.3)', padding: '10px' }}>
                        <Button onClick={this.handleShow} style={{ margin: "20px" }}>+ Add New Banner</Button>
                        <Modal show={this.state.show} onHide={this.handleClose} style={{ padding: "50px" }} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Image upload</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <FormGroup as={Row}>
                                    <FormLabel column sm="4">
                                        Enter the link</FormLabel>
                                    <Col sm="8">
                                        <FormControl
                                            className="form-control"
                                            type="text"
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.handleChange}
                                            rows="8"
                                        /></Col>
                                </FormGroup>
                            </Modal.Body>
                            <Modal.Footer>
                                <p>{this.state.status}</p>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close</Button>
                                <Button variant="primary" onClick={this.handlePost}>
                                    Post </Button>
                            </Modal.Footer>
                        </Modal>
                        <Table striped bordered hover size="sm" responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Status</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bannerImage}
                            </tbody>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Status</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}
export default CustomerDetails;
