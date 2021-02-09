import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
//css bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Profile = ({
  fullName,
  bio,
  handleAlert,
  children,
  Email,
  phoneNumber,
}) => {
  return (
    <div>
      <Card style={{ width: "27rem" }}>
        <Card.Img variant="top" />
        {children}
        <Card.Body>
          <Card.Title className="title">Information</Card.Title>
          <Card.Text>
            <p>{fullName}</p>
            <p>{bio}</p>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title className="title">Contact</Card.Title>
          <Card.Text>
            <p>{Email}</p>
            <p>{phoneNumber}</p>
          </Card.Text>
        </Card.Body>
        <Button variant="primary" onClick={() => handleAlert(fullName)}>
          Show_info
        </Button>
      </Card>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "This is the Name",
  bio: "this the biography",
  handleAlert: alert,
  children: "image",
  Email: "this is his email",
  phoneNumber: "this is his phone number",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  handleAlert: PropTypes.func,
  Email: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default Profile;
