import React from "react";
import Axios from "axios";
import SideNav from "../SideNav";
import Toolbar from '../SidenavComponents/Toolbar';
import Backdrop from '../SidenavComponents/Backdrop';
import { Table } from "react-bootstrap";

class CustomerDetails extends React.Component {
    state = {
        users: [],
        sideDrawerOpen: false,
        show: false
    };
    componentDidMount() {
        Axios.get("http://localhost:8000/user")
            .then((res) => {
                console.log(res.data);
                this.setState({
                    users: res.data
                });
            })
            .catch((err) => console.log(err));
    }
    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }
    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }
    render() {
        let backdrop
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        const { users } = this.state
        const userData = users.length ? (
            users.map((user, index) => {
                return (
                    user.admin === false ? (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.number}</td>
                            <td>{user.usercart.length}</td>
                            <td>{user.cartWishList.length}</td>
                            <td>{user.trendingWishList.length}</td>
                            <td>{user.orderHistory.length}</td>
                        </tr>
                    ) : (null)
                )
            })
        ) : (<tr><td colSpan="10">Nothing to display</td></tr>)


        return (
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideNav show={this.state.sideDrawerOpen} />
                {backdrop}
                <div style={{
                    margin: " 50px auto 50px 54px", textAlign: 'center', padding: '20px 30px 20px 30px'
                }}>
                    <h1 style={{ margin: '10px auto 30px auto' }}><strong>Customer Details: </strong></h1>
                    <Table striped bordered hover size="sm" responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Contact Number</th>
                                <th>User Cart</th>
                                <th>Wish List</th>
                                <th>Trending Wish List</th>
                                <th>Order History</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData}
                        </tbody>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Contact Number</th>
                                <th>User Cart</th>
                                <th>Wish List</th>
                                <th>Trending Wish List</th>
                                <th>Order History</th>
                            </tr>
                        </thead>
                    </Table>
                </div>
            </div>
        );
    }
}
export default CustomerDetails;
