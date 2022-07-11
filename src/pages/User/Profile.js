import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import bgLeft from "../../assets/image/BgLeft.png";
import bgRight from "../../assets/image/BgRight.png";
import Navbars from '../../components/navbar/Navbars';
import IconEmail from "../../assets/image/IconEmail.png";
import IconPhone from "../../assets/image/IconPhone.png";
import IconGender from "../../assets/image/IconGender.png";
import IconAddress from "../../assets/image/IconAddress.png";

function Profile() {
    return (
        <>
            {/* background image */}
            <img src={bgLeft} className="bgImage" alt="" />
            <img src={bgRight} className="bgImageR" alt="" />

            <Navbars />

            <Container className="mt-3" >
                <Row>
                    <Col>
                        <h2 className='textTitle'>Profile</h2>
                        <Container style={{ padding: "0 15px" }} className='containerProfile' >
                            <Row>
                                <Col>
                                    <div className='profileDetailLeft'>
                                        <div>
                                            <img src={IconEmail} alt="" />
                                        </div>
                                        <div>
                                            <h4 className='textTitle'>email@mail.com</h4>
                                            <h6 className='text-secondary'>Email</h6>
                                        </div>
                                    </div>
                                    <div className='profileDetailLeft'>
                                        <div>
                                            <img src={IconGender} alt="" />
                                        </div>
                                        <div>
                                            <h4 className='textTitle'>Male</h4>
                                            <h6 className='text-secondary'>Gender</h6>
                                        </div>
                                    </div>
                                    <div className='profileDetailLeft'>
                                        <div>
                                            <img src={IconPhone} alt="" />
                                        </div>
                                        <div>
                                            <h4 className='textTitle'>0811-2222-3333</h4>
                                            <h6 className='text-secondary'>Mobile Phone</h6>
                                        </div>
                                    </div>
                                    <div className='profileDetailLeft'>
                                        <div>
                                            <img src={IconAddress} alt="IconAddress" />
                                        </div>
                                        <div>
                                            <h4 className='textTitle'>Jalan Sepanjang Kenangan</h4>
                                            <h6 className='text-secondary'>Address</h6>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <div className='profileDetailRight'>
                                            <img style={{ width: "250px", height: "300px", borderRadius: "5px" }} src="https://e7.pngegg.com/pngimages/269/774/png-clipart-anonymous-anonymity-mask-anonymous-logo-monochrome.png" alt="" />
                                            <Button className='mt-3 btn-danger btnEditProfile'>Edit Profile</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>

                {/* My Books */}
                <Row className='py-5'>
                    <Col>
                        <h2 className='textTitle'>My Books</h2>
                    </Col>
                </Row>
                <Row className='pb-5 rowMyBooks'>
                    <Col md="2" className='me-5'>
                        <img
                            className="imgListBook"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg/330px-Sebuah-seni-untuk-bersikap-bodoh-amat.jpg" alt="" />
                        <h3 style={{ textAlign: "justify" }}>Title Book</h3>
                        <h6 style={{ textAlign: "justify", color: "grey" }}>By: Author</h6>
                        <Button className='btnDownload'>Download</Button>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Profile