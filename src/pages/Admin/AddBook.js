import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

import bgLeft from "../../assets/image/BgLeft.png";
import bgRight from "../../assets/image/BgRight.png";
import Navbars from '../../components/navbar/Navbars';
import IconAttachFile from "../../assets/image/IconAttachFile.png";
import IconAddBookWhite from "../../assets/image/IconAddBookWhite.png";
import IconChecklist from "../../assets/image/IconChecklist.png";

function AddBook() {
    return (
        <>
            {/* background image */}
            <img src={bgLeft} className="bgImage" alt="" />
            <img src={bgRight} className="bgImageR" alt="" />

            <Navbars />

            <Container className="py-3" >
                <h1>Add Book</h1>
                <form>
                    <Row>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            className='inputAddBook'
                        // onChange={handleChange}
                        />
                    </Row>
                    <Row>
                        <input
                            type="date"
                            name="year"
                            placeholder="Publication Date (Format: DD-MM-YYYY)"
                            className='inputAddBook'
                        // onChange={handleChange}
                        />
                    </Row>
                    <Row>
                        <input
                            type="text"
                            name="author"
                            placeholder="Author Name"
                            className='inputAddBook'
                        // onChange={handleChange}
                        />
                    </Row>
                    <Row>
                        <input
                            type="number"
                            name="pages"
                            placeholder="Pages"
                            className='inputAddBook'
                        // onChange={handleChange}
                        />
                    </Row>
                    <Row>
                        <input
                            type="number"
                            name="ISBN"
                            placeholder="ISBN"
                            className='inputAddBook'
                        // onChange={handleChange}
                        />
                    </Row>
                    <Row>
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            className='inputAddBook'
                        // onChange={handleChange}
                        />
                    </Row>
                    <Row>
                        <textarea
                            name="desc"
                            placeholder="About This Book"
                            rows="5"
                            className='inputAddBook'
                        // onChange={handleChange}
                        />
                    </Row>

                    <Row
                        className='rowAddBook'
                        style={{
                            display: "flex",
                            alignItems: "center",
                            zIndex: 99
                        }}
                    >
                        <Col sm={2} className='mb-1'>
                            <label htmlFor="bookPdf">
                                <div className='btnAttach'>
                                    Attach File {" "}<span className='ms-3'><img className='ms-4' src={IconAttachFile} alt="IconAttachFile" style={{ width: '15px', height: '25px' }} /></span>
                                </div>
                            </label>
                            <input
                                type="file"
                                name="bookPdf"
                                id="bookPdf"
                                accept="application/pdf"
                                // onChange={handleChangePdf}
                                hidden
                            />
                        </Col>
                        <Col>
                            <img style={{ width: '50px', height: '37px' }} src={IconChecklist} alt="Check" />
                        </Col>
                    </Row>
                    <Row
                        className='rowAddBook'
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Col sm={2} className='mb-1'>
                            <label htmlFor="bookImg">
                                <div className='btnAttach'>
                                    Attach Image {" "}<span className='ms-1'><img className='ms-4' src={IconAttachFile} alt="IconAttachFile" style={{ width: '15px', height: '25px' }} /></span>
                                </div>
                            </label>
                            <input
                                type="file"
                                name="bookImg"
                                id="bookImg"
                                accept='image/*'
                                // onChange={handleChange}
                                hidden
                            />
                        </Col>
                        {/* <div>
                                <img
                                    src='{preview}'
                                    style={{
                                        marginLeft: '10px',
                                        marginTop: '-20px',
                                        width: "150px",
                                        height: "200px",
                                    }}
                                    alt=""
                                />
                            </div> */}
                    </Row>
                    <Row className='d-flex justify-content-end'>
                        <Button className='btnAddBook justify-content-end' type="submit" style={{ backgroundColor: "blue" }}>
                            Add Book {" "}<span className='ms-1'><img src={IconAddBookWhite} alt="IconAddBookWhite" /></span>
                        </Button>
                    </Row>
                </form>
            </Container>
        </>
    )
}

export default AddBook