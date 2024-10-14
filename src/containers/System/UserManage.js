import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers } from '../../services/userService'
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
        };
    }

    async componentDidMount() {
        console.log(this.render());
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) // không lỗi, lấy được dữ liệu từ API 
        {
            this.setState({
                arrUsers: response.users,
            })
        }

    }


    /**
     * 
     * run component 
     * 1. run construct => init state 
     * 2 did mount (set state)
     * 3. render 
     */


    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className="title text-center">Manage User</div>
                <div className="users-table mt-4 mx-1">
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>FirstName</th>
                                <th>Lastname</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arrUsers && arrUsers.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.email}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.address}</td>
                                            <td>
                                                <button className="btn-edit"><i className="fa-solid fa-pencil"></i></button>
                                                <button className="btn-delete"><i className="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
