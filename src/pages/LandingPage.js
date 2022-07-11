import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import rupiahFormat from "rupiah-format";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Navbars from "../components/navbar/Navbars";
import bgLeft from "../assets/image/BgLeft.png";
import bgRight from "../assets/image/BgRight.png";

function LandingPage() {
    const settingSlider = {
        dots: true,
        infinite: false,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        initialSlide: 0
    }

    const String = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae molestias vitae facilis corporis, molestiae magnam sunt dicta commodi quo soluta, animi eligendi perferendis in quasi aliquid, unde ut distinctio tenetur porro maxime! Nobis rem autem veniam pariatur velit, doloremque qui, animi id totam officia minus, distinctio odio delectus."

    return (
        <>
            {/* background image */}
            <img src={bgLeft} className="bgImage" alt="" />
            <img src={bgRight} className="bgImageR" alt="" />

            <Navbars />

            <div className="mt-5">
                <div className=" text-center pt-5">
                    <h1>With us, you can shop online & help</h1>
                    <h1>save your high street at the same time</h1>
                </div>

                <div className='mt-5 pt-4'>
                    <Slider {...settingSlider}>
                        <div>
                            <Row className="rowCarousel">
                                {/* List Promo */}
                                <Col md={6} className="colCarousel">
                                    <img
                                        className="d-block imgCarousel"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg/330px-Sebuah-seni-untuk-bersikap-bodoh-amat.jpg"
                                        alt=""
                                    />
                                </Col>
                                <Col md={6} className="promoBooks">
                                    <h5 className='textTitle'>
                                        Sebuah Seni untuk Bersikap Bodo Amat
                                    </h5>
                                    <h6>By: Author</h6>
                                    <p>{String.slice(0, 70) + "..."}</p>
                                    <h5 className="text-success">
                                        {rupiahFormat.convert(180000 * 0.75)}
                                        {/* <span
                                                style={{
                                                    color: "red",
                                                    marginLeft: "10px",
                                                    textDecorationLine: "line-through",
                                                }}
                                            >
                                                {rupiahFormat.convert(180000)}
                                            </span> */}
                                    </h5>
                                    <Button className="btnCart">
                                        Add to Cart
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="rowCarousel">
                                {/* List Promo */}
                                <Col md="4" className="colCarousel">
                                    <img
                                        className="d-block imgCarousel"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg/330px-Sebuah-seni-untuk-bersikap-bodoh-amat.jpg"
                                        alt=""
                                    />
                                </Col>
                                <Col md="4" className="promoBooks">
                                    <h5 className='textTitle'>
                                        Sebuah Seni untuk Bersikap Bodo Amat
                                    </h5>
                                    <h6>By: Author</h6>
                                    <p>{String.slice(0, 70) + "..."}</p>
                                    <h5 className="text-success">
                                        {rupiahFormat.convert(180000 * 0.75)}
                                        {/* <span
                                                style={{
                                                    color: "red",
                                                    marginLeft: "10px",
                                                    textDecorationLine: "line-through",
                                                }}
                                            >
                                                {rupiahFormat.convert(180000)}
                                            </span> */}
                                    </h5>
                                    <Button className="btnCart">
                                        Add to Cart
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="rowCarousel">
                                {/* List Promo */}
                                <Col md="4" className="colCarousel">
                                    <img
                                        className="d-block imgCarousel"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg/330px-Sebuah-seni-untuk-bersikap-bodoh-amat.jpg"
                                        alt=""
                                    />
                                </Col>
                                <Col md="4" className="promoBooks">
                                    <h5 className='textTitle'>
                                        Sebuah Seni untuk Bersikap Bodo Amat
                                    </h5>
                                    <h6>By: Author</h6>
                                    <p>{String.slice(0, 70) + "..."}</p>
                                    <h5 className="text-success">
                                        {rupiahFormat.convert(180000 * 0.75)}
                                        {/* <span
                                                style={{
                                                    color: "red",
                                                    marginLeft: "10px",
                                                    textDecorationLine: "line-through",
                                                }}
                                            >
                                                {rupiahFormat.convert(180000)}
                                            </span> */}
                                    </h5>
                                    <Button className="btnCart">
                                        Add to Cart
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </div>

                <Container className="mt-5 pb-5">
                    <h1 className="textTitle">List Book</h1>
                    <Row className="">
                        {/* List Book */}
                        <Col md="2" className="me-5">
                            <img
                                className="imgListBook"
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1533024821i/41011836.jpg"
                                alt="" />
                            <h3>Title Book</h3>
                            <h6>By: Author</h6>
                            <h5 className="text-success">{rupiahFormat.convert(180000)}</h5>
                        </Col>
                        <Col md="2" className="me-5">
                            <img
                                className="imgListBook"
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1533024821i/41011836.jpg"
                                alt="" />
                            <h3>Title Book</h3>
                            <h6>By: Author</h6>
                            <h5 className="text-success">{rupiahFormat.convert(180000)}</h5>
                        </Col>
                        <Col md="2" className="me-5">
                            <img
                                className="imgListBook"
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1533024821i/41011836.jpg"
                                alt="" />
                            <h3>Title Book</h3>
                            <h6>By: Author</h6>
                            <h5 className="text-success">{rupiahFormat.convert(180000)}</h5>
                        </Col>
                        <Col md="2" className="me-5">
                            <img
                                className="imgListBook"
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1533024821i/41011836.jpg"
                                alt="" />
                            <h3>Title Book</h3>
                            <h6>By: Author</h6>
                            <h5 className="text-success">{rupiahFormat.convert(180000)}</h5>
                        </Col>
                        <Col md="2" className="me-5">
                            <img
                                className="imgListBook"
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1533024821i/41011836.jpg"
                                alt="" />
                            <h3>Title Book</h3>
                            <h6>By: Author</h6>
                            <h5 className="text-success">{rupiahFormat.convert(180000)}</h5>
                        </Col>
                        <Col md="2" className="me-5">
                            <img
                                className="imgListBook"
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1533024821i/41011836.jpg"
                                alt="" />
                            <h3>Title Book</h3>
                            <h6>By: Author</h6>
                            <h5 className="text-success">{rupiahFormat.convert(180000)}</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LandingPage