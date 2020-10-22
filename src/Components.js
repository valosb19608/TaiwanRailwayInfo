import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import styled from "@emotion/styled";

export const TRAlogo = () => (
  <img
    src="https://www.railway.gov.tw/tra-tip-web/static/images/logo-tra.png"
    alt="TRA logo"
  />
);

const StyledHr = styled.hr`
  height: 12px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
`;

export const Hrs = () => {
  return <StyledHr></StyledHr>;
};

const StyledHeader = styled.header`
  min-height: 100vh;
  background-image: url(https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/static/TRA_Sightseeing/imgs/index_slight/001.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`;


const SearchForm = () => {
  return (
    <div className="submit-form">
                        <form id="form-submit" action="" method="get">
                            <div className="row">
                                <div className="col-md-3 first-item">
                                    <fieldset>
                                        <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required=""/>
                                    </fieldset>
                                </div>
                                <div className="col-md-3 second-item">
                                    <fieldset>
                                        <input name="location" type="text" className="form-control" id="location" placeholder="Type location..." required=""/>
                                    </fieldset>
                                </div>
                                <div className="col-md-3 third-item">
                                    <fieldset>
                                        <select required className='category' onChange='this.form.()'>
                                            <option value="">Select category...</option>
                                            <option value="Shops">Shops</option>
                                            <option value="Hotels">Hotels</option>
                                            <option value="Restaurants">Restaurants</option>
                                            <option value="Events">Events</option>
                                            <option value="Meetings">Meetings</option>
                                            <option value="Fitness">Fitness</option>
                                            <option value="Cafes">Cafes</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div className="col-md-3">
                                    <fieldset>
                                        <button type="submit" id="form-submit" className="btn">Search Now</button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
  )
}

export const Headers = () => {
  return (
    <StyledHeader className="d-flex justify-content-center align-items-center">
      <div className="text-center text-white">
        <TRAlogo />
        <h1>交通部臺灣鐵路管理局</h1>
      </div>
    </StyledHeader>
  );
};

export const Navbars = () => {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">交通部臺灣鐵路管理局</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">首頁</Nav.Link>
          <Nav.Link href="/Station">車站資訊</Nav.Link>
          <Nav.Link href="/StationExit">車站出入口說明</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export const Footers = () => {
  return (
    <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
      <div className="container text-center">
        <small>Copyright © Your Website</small>
      </div>
    </footer>
  )
}
