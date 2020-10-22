import React, { useEffect, useState } from "react";
import { Headers, Navbars, Footers, Hrs } from "./Components";
import { Carousel, Card, Button, Toast, Table, Modal, Accordion } from 'react-bootstrap'

const Advertising = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: "80%"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/tip/img/09782277-b4a7-486d-bf87-700555de3508/1903x764"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/tip/img/e3dc7504-cc72-41b1-9514-3dab0ec23be9/1903x764"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/tip/img/0e05be28-20bf-468f-baa3-5af32e3c6417/1903x764"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
    )
}

const News = () => {
  
  const [newsList, setNewsList] = useState([])
  
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    fetch(
      'http://api.haoying.ngrok.io/getNews', {
        method: 'GET'
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setNewsList(data);
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Table striped bordered hover style={{ width: "80%"}}>
      <thead>
        <tr>
          <th colSpan="4">最新消息</th>
        </tr>
      </thead>
      <tbody>
        {newsList.map((item, index) => (
          <tr>
            <td>{++index}</td>
            <td colSpan="2">{item.title}</td>
            <td>{item.publishTime.substring(0,10)}</td>
          </tr>
        ))}
      </tbody>
      </Table>
    </div>
  )
}

const Activities = () => {
  return (
    <div className="activity">
      <div className="container pt-3">
        <div className="row justify-content-center">
          <Card className="col card m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/tip/img/40507615-4c28-4dd1-bb70-26e3344a65e1/360x270" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className="col card m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/tip/img/f6a225d8-0e56-4de2-8b22-5f6d7b0b57b0/360x270" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className="col card m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/tip/img/cf99fdf7-9031-484e-91cd-c50e76525719/360x270" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export const Home = () => {
  return (
    <>
      <Headers />
      <Navbars />
      <News />
      <Advertising />
      <Hrs />
      <Activities />
      <Footers />
    </>
  )
}