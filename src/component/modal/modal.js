import React from 'react';
import Dialog from 'material-ui/Dialog';
import InputField from '../ui/textField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import * as moment from 'moment';

const UserForm = (props) => (

    <Dialog
        title={props.modaltype == 1 ? "Add New User" : props.modaltype == 2 ? "Edit User Details" : "User Details"}
        actions={[
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={props.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={() => props.submitUpdates(props.userData)}
            />,
        ]}
        open={props.open}
        docked={true}
        onRequestClose={props.handleClose}
    >

        <div className="row">
            <div className="col-lg-5">
                <InputField
                    signup={true}
                    type="text"
                    label="First Name"
                    name="firstname"
                    keyType="firstname"
                    value={props.userData.firstname}
                    onChange={props.formHandler}
                />
            </div>
            <div className="col-lg-5">
                <InputField
                    signup={true}
                    type="text"
                    label="Last Name"
                    name="lastname"
                    keyType="lastname"
                    value={props.userData.lastname}
                    onChange={props.formHandler}
                />
            </div>
            <div className="col-lg-2">
                <InputField
                    signup={true}
                    type="text"
                    label="Age"
                    name="age"
                    keyType="age"
                    value={props.userData.age}
                    onChange={props.formHandler}
                />
            </div>
        </div>


        <div className="row">

            <div className="col-lg-4">
                <DatePicker
                    placeholder="DD/MM/YYYY"
                    textFieldStyle={{ height: '60px', width: '100%', fontSize: '14px', marginTop: '12px' }}
                    value={props.userData.doj || ''} onChange={props.onChangeDatePicker} autoOk={false}
                    floatingLabelStyle={{ top: '128px', margin: '0px' }}
                    formatDate={(date) => moment(date).format('DD-MM-YYYY')}
                    underlineShow={true} floatingLabelFixed={true}
                />
            </div>

            <div className="col-lg-3">
                <DropDownMenu
                    value={props.userData.gender}
                    onChange={props.handleChange}
                    style={{ width: '100%', marginTop: '15px' }}
                    autoWidth={true}
                >
                    <MenuItem value={"male"} primaryText="Male" />
                    <MenuItem value={"female"} primaryText="Female" />
                </DropDownMenu>
            </div>

        </div>

    </Dialog>

)

export default UserForm;