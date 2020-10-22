import React, { useEffect, useState, Component  } from "react";
import { Headers, Navbars, Footers } from "./Components";
import { Card, Button, Table, Accordion } from 'react-bootstrap'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div><img style={{width: "35px", height: "35px"}} src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg"/>{text}</div>;

const StationInfo = () => {

    const [stationList, setStationList] = useState([])
  
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        fetch(
        'http://localhost:8080/getStationInfo', {
            method: 'GET'
        }
        )
        .then((response) => response.json())
        .then((data) => {
            setStationList(data);
        });
    }

    return (
        <div className="container">
            <Accordion defaultActiveKey="0">
            {stationList.map((item, index) => (
                <Card key={++index}>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                            {item.stationNameTw}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>車站資訊</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <td colSpan="2">{item.stationNameTw}</td>
                                        <td>經度：{item.positionLat}</td>
                                        <td>緯度：{item.positionLon}</td>
                                    </tr>
                                    <tr>
                                        <td>車站地址</td>
                                        <td colSpan="3">{item.stationAddress}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            
                            <IsShowMap lat={item.positionLat} lng={item.positionLon} text={item.stationNameTw} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            
            ))}
            </Accordion>
        </div>
    )
}

class IsShowMap extends React.Component {

    state = {
      isAboutVisible: false,
    }
  
    render() {
     return (
      <div className="container">
        <div className="Button-Container">
        <div className="Nav-Text About-Button">
          <Button variant="primary" onClick={() => this.setState({ isAboutVisible: true }) }>顯示地圖</Button>
        </div>
        </div>
        { this.state.isAboutVisible ? <GoogleMap lat={this.props.lat} lng={this.props.lng} text={this.props.text}  /> : null }
      </div>
      );
     }
  }

const GoogleMap = (props) => {
    // <SimpleMap lat={item.positionLat} lng={item.positionLon} text={item.stationNameTw} />
    const { lat, lng, text } = props;

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDJzHapCeEO6PiyLllVipTGLvbgd9o3oUU" }}
            defaultCenter={{lat: lat,lng:lng}}
            defaultZoom={13}
            >
            <AnyReactComponent
                lat={lat}
                lng={lng}
                text={text}
            />
            </GoogleMapReact>
        </div>
      );
}

export const Station = () => {
    return (
        <>
            <Headers />
            <Navbars />
            <StationInfo />
            
            <Footers />
        </>
    )
}