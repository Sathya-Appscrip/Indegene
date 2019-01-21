import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import List from '../../component/ui/list';

import UserForm from '../../component/modal/modal';
import RaisedButton from 'material-ui/RaisedButton';
import * as moment from 'moment';


const style = {
    color: '#fff'
};
 
class Home extends Component {

    state = {
        open: false,
        modaltype: 0,
        toUpdateUser: {
            id: '',
            firstname: '',
            lastname: '',
            age: '',
            gender: 'male',
            doj: new Date()
        },
    };

    constructor(props) {
        super(props);
        this.newUserFormHandler = this.newUserFormHandler.bind(this);
        this.newUserFormEditor = this.newUserFormEditor.bind(this);
        this.submitUpdates = this.submitUpdates.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }


    newUserFormHandler(keyName, e) {
        this.setState({ toUpdateUser: { ...this.state.toUpdateUser, [keyName]: e.target.value, } });
    }

    refreshList() {
        this.setState({
            toUpdateUser: {
                ...this.state.toUpdateUser,
                id: '',
                firstname: '',
                lastname: '',
                age: '',
                gender: 'male',
                doj: new Date()
            },
        })
    }

    newUserFormEditor(data) {
        this.setState({
            toUpdateUser: {
                ...this.state.toUpdateUser,
                id: data.id,
                firstname: data.firstname,
                lastname: data.lastname,
                age: data.age,
                gender: data.gender,
                doj: this.toDate(data.doj)
            },
            open: true,
            modaltype: 2
        })
    }


    submitUpdates(data) {
        console.log("data", this.state.modaltype, data)
        data['doj'] = moment(data.doj).format('DD-MM-YYYY');
        this.state.modaltype == 1 ? data['id'] = this.props.userList.length + 1 : data['id'] = data.id
        this.props.updateUsers(this.props.userList, data);

        this.handleClose();
    }

    deleteUser(data) {
        this.updateArray(data);
    }

    updateArray(data) {

        let Arr1 = [...this.props.userList];
        console.log("Arr1", Arr1);

        let ind = Arr1.findIndex((item) => item.id == data.id);

        Arr1.splice(ind, 1)

        this.props.deleteUsers(Arr1);
    }

    toDate(dateStr) {
        let parts = dateStr.split("-")
        return new Date(parts[2], parts[1] - 1, parts[0])
    }

    onChangeDatePicker = (e, date) => {
        this.setState({ toUpdateUser: { ...this.state.toUpdateUser, doj: date, } });
    }

    handleOpen = () => {
        this.setState({ open: true, modaltype: 1 });
    };

    handleClose = () => {
        this.setState({ open: false, modaltype: 0 });
        this.refreshList();
    };

    handleChange = (event, index, value) => {
        this.setState({ toUpdateUser: { ...this.state.toUpdateUser, gender: value, } });
    };


    componentDidMount() {
        this.props.getUserList();
    }



    render() {

        console.log("date", this.props.userList)

        return (
            <div className="container">
                <div className="row box" style={{ marginTop: '50px' }}>
                    <div className="col-lg-2"><b>First Name</b></div>
                    <div className="col-lg-2"><b>Last Name</b></div>
                    <div className="col-lg-2"><b>Age</b></div>
                    <div className="col-lg-2"><b>Gender</b></div>
                    <div className="col-lg-2"><b>DOJ</b></div>
                    <div className="col-lg-2"><b>Action</b></div>
                </div>

                <List userData={this.props.userList} newUserFormEditor={this.newUserFormEditor} deleteUser={this.deleteUser} />

                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="col-lg-2">
                        <RaisedButton backgroundColor="#a4c639" labelStyle={style} label="Add User"
                            onClick={this.handleOpen} />
                    </div>
                </div>


                <UserForm
                    open={this.state.open} handleClose={this.handleClose}
                    modaltype={this.state.modaltype} submitUpdates={this.submitUpdates}
                    formHandler={this.newUserFormHandler} userData={this.state.toUpdateUser}
                    onChangeDatePicker={this.onChangeDatePicker} handleChange={this.handleChange}
                />

            </div >
        )
    }

}


const mapStateToProps = state => {
    return {
        userList: state.initState.userData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserList: () => dispatch(actions.getUsers()),
        updateUsers: (userList, data) => dispatch(actions.updateUsers(userList, data)),
        deleteUsers: (data) => dispatch(actions.deleteUsers(data)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
