
import React from 'react';
import { v4 } from 'uuid';

const List = (props) => (
    props.userData && props.userData.length > 0 ? props.userData.map((user, index) =>
        <div className="row box-border-top-open" id={v4()} key={"userList" + index}>
            <div className="col-lg-2">{user.firstname}</div>
            <div className="col-lg-2">{user.lastname}</div>
            <div className="col-lg-2">{user.age}</div>
            <div className="col-lg-2">{user.gender}</div>
            <div className="col-lg-2">{user.doj}</div>
            <div className="col-lg-2">
                <button type="button" onClick={(e) => props.newUserFormEditor(user)} className="btn bttn btn-info"> Edit </button>
                <button type="button" onClick={(e) => props.deleteUser(user)} className="btn bttn btn-danger"> Delete </button>
            </div>
        </div>
    ) : ''
)

export default List;