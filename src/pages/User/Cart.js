import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import rupiahFormat from 'rupiah-format';

import Navbars from '../../components/navbar/Navbars'
import bgLeft from "../../assets/image/BgLeft.png";
import bgRight from "../../assets/image/BgRight.png";
import IconDelete from "../../assets/image/IconDelete.png";

function Cart() {
    return (
        <>
            {/* background image */}
            <img src={bgLeft} className="bgImage" alt="" />
            <img src={bgRight} className="bgImageR" alt="" />

            <Navbars />

            <Container className="mt-5 pt-5" >
                <h1>My Cart</h1>
                <h4 style={{ fontWeight: "400" }}>Review Your Order</h4>
                <Row>
                    <Col md={8}>
                        <hr />
                        <Row style={{
                            margin: "45px 0px 45px 0px",
                        }}>
                            <Col md={3}>
                                <img
                                    style={{ boxShadow: "1px 1px 10px black", width: "130px", height: "175px" }}
                                    src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1533024821i/41011836.jpg'
                                    className='imgCart'
                                    alt='CoverBook'
                                />
                            </Col>
                            <Col md={8}>
                                <h3>Title Book</h3>
                                <h6 style={{ color: "grey" }}>By: Author</h6>
                                <h5 className='text-success'>{rupiahFormat.convert(150000)}</h5>
                            </Col>
                            <Col md={1}>
                                <img src={IconDelete} alt="IconDelete" style={{ cursor: "pointer" }} />
                            </Col>
                        </Row>
                        <hr />
                    </Col>
                    <Col md={4}>
                        <hr />
                        <Row>
                            <Col>
                                <p>Subtotal</p>
                            </Col>
                            <Col>
                                <p>{rupiahFormat.convert(150000)}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Qty</p>
                            </Col>
                            <Col>
                                <p>item qty</p>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <p className='text-success'>Total</p>
                            </Col>
                            <Col>
                                <p className='text-success'>{rupiahFormat.convert(150000)}</p>
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-center'>
                            <Button className='btnPay d-flex align-items-end justify-content-center'>Pay</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart