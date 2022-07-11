import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import rupiahFormat from 'rupiah-format';

import Navbars from '../../components/navbar/Navbars'
import bgLeft from "../../assets/image/BgLeft.png";
import bgRight from "../../assets/image/BgRight.png";
import IconCartWhite from "../../assets/image/IconCartWhite.png";

function DetailBook() {
    return (
        <>
            {/* background image */}
            <img src={bgLeft} className="bgImage" alt="" />
            <img src={bgRight} className="bgImageR" alt="" />

            <Navbars />

            <Container style={{ maxWidth: "1100px" }} className="mt-5 pt-5" >
                <Row>
                    <Col md={4}>
                        <img
                            src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1533024821i/41011836.jpg'
                            className='imgDetailBook'
                            alt='CoverBook'
                        />
                    </Col>
                    <Col md={8}>
                        <h1>Title Book</h1>
                        <h6 style={{ color: "grey" }}>By: Author</h6>
                        <div>
                            <h5>Publication Date</h5>
                            <p style={{ color: "grey" }}>dd mm yyyy</p>
                        </div>
                        <div>
                            <h5>Pages</h5>
                            <p style={{ color: "grey" }}>213</p>
                        </div>
                        <div>
                            <h5 className='text-danger'>ISBN</h5>
                            <p style={{ color: "grey" }}>80214741567</p>
                        </div>
                        <div>
                            <h5>Price</h5>
                            <p className='text-success'>{rupiahFormat.convert(150000)}</p>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5 py-5'>
                    <Col>
                        <h2>About This Book</h2>
                        <p style={{ textAlign: "justify", color: "grey" }}>
                            Bagi Heidy Theapila, latar belakang keluarga membuatnya tak mudah menemukan pasangan sejiwa. Tapi, ceritanya berbeda dengan Mirza. Heidy meyakini lelaki itu mencintainya dengan tulus. Namun, keyakinannya tumbang. Pertemuan mereka bukan cuma karena campur tangan Allah semata. Melainkan karena skenario rapi yang berkaitan dengan materi. Marah sekaligus patah hati, Heidy membatalkan rencana masa depannya dan memilih kabur ke Italia. Langkahnya mungkin tak dewasa, tapi Heidy butuh ruang untuk meninjau ulang semua rencana dalam hidupnya. Lalu, Allah memberinya kejutan.
                            <br />
                            <br />
                            Dalam pelayaran menyusuri Venesia, Heidy bertemu raksasa bermata biru. Graeme MacLeod, pria yang mencuri napasnya di pertemuan pertama mereka. Meski ketertarikan di antara mereka begitu besar, Heidy tidak berniat menjalin asmara singkat. Graeme harus dilupakan. Ketika apa yang terjadi di Venesia tidak bisa tetap ditinggal di Venesia, Heidy mulai goyah. Apalagi Graeme ternyata lelaki gigih yang mengejarnya hingga ke Jakarta dan tak putus asa tatkala ditolak. Meski akhirnya satu per satu rahasia kelam lelaki itu terbuka, Heidy justru kian jatuh cinta. Pertanyaannya, apakah cinta memang benar-benar mampu menyatukan mereka?
                        </p>
                        <div className='d-flex justify-content-end'>
                            <Button className='btnCart d-flex align-items-end'>Add Cart {" "}<img src={IconCartWhite} alt="IconCart" style={{ marginLeft: "10px", width: "25px", height: "25px" }} /></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailBook