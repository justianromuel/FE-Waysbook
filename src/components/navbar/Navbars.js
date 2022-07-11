import React, { useState, useContext } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import Avatar from 'react-avatar'
import { Link, useNavigate } from 'react-router-dom'

import Logo from '../../assets/image/LogoWaysbook.png'
import IconProfile from '../../assets/image/IconProfile.png'
import IconComplain from '../../assets/image/IconComplain.png'
import IconLogout from '../../assets/image/IconLogout.png'
import IconAddBook from '../../assets/image/IconAddBook.png'
import Login from '../modal/Login'
import Register from '../modal/Register'
import { UserContext } from '../../context/userContext'

function Navbars() {
    let navigate = useNavigate()

    const [state, dispatch] = useContext(UserContext)
    console.log('state usercontext', state);

    const [isClickLogin, setIsClickLogin] = useState(false)
    const [isClickRegister, setIsClickRegister] = useState(false)

    const handleClickLogin = () => setIsClickLogin(!isClickLogin)
    const handleClickRegister = () => setIsClickRegister(!isClickRegister)

    const logout = () => {
        dispatch({
            type: "LOGOUT",
        })
        navigate("/");
    }
    return (
        <>
            {!state.isLogin ? (
                <>
                    <Navbar expand="sm">
                        <Container>
                            <Navbar.Brand>
                                <Link to="/">
                                    <img alt="Logo Waysbook" src={Logo} />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Item className='ms-3'>
                                        <Button className="navBtnLogin" onClick={handleClickLogin}>
                                            Login
                                        </Button>
                                    </Nav.Item>
                                    <Nav.Item className='ms-3'>
                                        <Button className="navBtnRegister" onClick={handleClickRegister}>
                                            Register
                                        </Button>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    {/* Modal */}
                    {isClickLogin ? <Login isOpen={isClickLogin} /> : null}
                    {isClickRegister ? <Register isOpen={isClickRegister} /> : null}
                </>
            ) : state.user.role === "customer" ? (
                <>
                    <Navbar expand="sm">
                        <Container>
                            <Navbar.Brand>
                                <Link to="/">
                                    <img alt="Logo Waysbook" src={Logo} />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    {/* Icon User with DropDown */}
                                    <Nav.Item className='ms-3 avatarIcon'>
                                        <div className='dropdown'>
                                            <button
                                                id="dropdownMenu"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                type="button"
                                                className='btnDropDown'
                                            >
                                                <Avatar
                                                    color="#3A3A3A"
                                                    name={state.user.name}
                                                    size="50"
                                                    src="https://e7.pngegg.com/pngimages/565/454/png-clipart-user-computer-icons-anonymity-head-miscellaneous-face.png"
                                                    round={true}
                                                />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu">
                                                <li>
                                                    <Link to="/profile">
                                                        <button className="dropdown-item textTitle fs-5" type="button">
                                                            <img src={IconProfile} style={{ width: "25px", height: "25px" }} alt="IconProfile" />
                                                            {" "}Profile
                                                        </button>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/complain-user">
                                                        <button className="dropdown-item textTitle fs-5" type="button">
                                                            <img src={IconComplain} style={{ width: "25px", height: "25px" }} alt="IconComplain" />
                                                            {" "}Complain
                                                        </button>
                                                    </Link>
                                                </li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li>
                                                    <button className="dropdown-item textTitle fs-5" type="button" onClick={logout}>
                                                        <img src={IconLogout} style={{ width: "25px", height: "25px" }} alt="IconLogout" />
                                                        {" "}Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
            ) : (
                <>
                    <Navbar expand="sm">
                        <Container>
                            <Navbar.Brand>
                                <Link to="/list-transaction">
                                    <img alt="Logo Waysbook" src={Logo} />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    {/* Icon User with DropDown */}
                                    <Nav.Item className='ms-3 avatarIcon'>
                                        <div className='dropdown'>
                                            <button
                                                id="dropdownMenu"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                type="button"
                                                className='btnDropDown'
                                            >
                                                <Avatar
                                                    color="#3A3A3A"
                                                    name={state.user.name}
                                                    size="50"
                                                    src={Logo}
                                                    round={true}
                                                />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu">
                                                <li>
                                                    <Link to="/add-book">
                                                        <button className="dropdown-item textTitle fs-5" type="button">
                                                            <img src={IconAddBook} style={{ width: "25px", height: "25px" }} alt="IconAddBook" />
                                                            {" "}Add Book
                                                        </button>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/complain-admin">
                                                        <button className="dropdown-item textTitle fs-5" type="button">
                                                            <img src={IconComplain} style={{ width: "25px", height: "25px" }} alt="IconComplain" />
                                                            {" "}Complain
                                                        </button>
                                                    </Link>
                                                </li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li>
                                                    <button className="dropdown-item textTitle fs-5" type="button" onClick={logout}>
                                                        <img src={IconLogout} style={{ width: "25px", height: "25px" }} alt="IconLogout" />
                                                        {" "}Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
            )}
        </>
    )
}

export default Navbars