import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import rupiahFormat from "rupiah-format";
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Navbars from "../components/navbar/Navbars";
import bgLeft from "../assets/image/BgLeft.png";
import bgRight from "../assets/image/BgRight.png";
import { API } from '../config/api';

function LandingPage() {
    let { data: promobooks } = useQuery('promobooksCache', async () => {
        const response = await API.get('/promo-books');
        // console.log(response);
        return response.data.data.promoBooks;
    });
    // console.log(promobooks);

    let { data: books } = useQuery('booksCache', async () => {
        const response = await API.get('/books');
        // console.log(response);
        return response.data.data.books;
    });
    // console.log(books);

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
                        {promobooks?.map((item, index) => (
                            <div key={index}>
                                <Row className="rowCarousel">
                                    <Col md="4" className="colCarousel">
                                        <Link to={`/detail-book/${item.item.id}`}>
                                            <img
                                                className="d-block imgCarousel"
                                                src={item.bookImg}
                                                alt=""
                                            />
                                        </Link>
                                    </Col>
                                    <Col md="4" className="promoBooks">
                                        <h5 className='textTitle'>
                                            {item.item.title}
                                        </h5>
                                        <h6>By: {item.item.author}</h6>
                                        <p>{item.item.desc.slice(0, 70) + "..."}</p>
                                        <h5 className="text-success">
                                            {rupiahFormat.convert(item.item.price)}
                                        </h5>
                                        <Button className="btnCart">
                                            Add to Cart
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </Slider>
                </div>

                <Container className="mt-5 pb-5">
                    <h1 className="textTitle">List Book</h1>
                    <Row>
                        {/* List Book */}
                        {books?.map((item, index) => (
                            <Col md="2" className="me-5">
                                <>
                                    <img
                                        className="imgListBook"
                                        src={item.bookImg}
                                        alt="" />
                                    <h3>{item.title}</h3>
                                    <h6>By: {item.author}</h6>
                                    <h5 className="text-success">{rupiahFormat.convert(item.price)}</h5>
                                </>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LandingPage