import React from "react";
import {useSelector} from 'react-redux'
import {Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { Outlet } from "react-router-dom";
function UserDashboard()
{
    let {userObj}=useSelector(state=>state.user)
return (
    <>
    <Nav className='justify-content-center mt-3 'variant="underline" defaultActiveKey='/profile'>
        <Nav.Item>
            <Nav.Link to='profile' as={NavLink} eventKey="link-0">
                User Profile
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link to='todos' as={NavLink} eventKey="link-1">
                Todos
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link to='add' as={NavLink} eventKey="link-2">
                Add
            </Nav.Link>
        </Nav.Item>
    </Nav>
    <div className="mt-3">
        <Outlet/>
    </div>
    </>
)
}

export default UserDashboard