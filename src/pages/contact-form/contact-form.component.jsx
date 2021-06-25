import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:mayankgarg3956@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger"
                  title="mayankgarg3956@gmail.com"
                >
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/mayank-garg-54b477131/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/SDmayank"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://twitter.com/@Ur_mg3956"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <br></br>
            <div>
              <Card>
                <br></br>
                <Card.Text className="text-left style">
                  <br></br>
                  <ul className="text-left">
                    <li>
                      <strong>Contact Number: </strong> 8800101673{" "}
                    </li>
                    <li>
                      <strong>Email ID</strong> MayankGarg3956@gmail.com
                    </li>
                    <li>
                      <strong>Designation</strong> Associate Engineer
                    </li>
                    {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                  </ul>
                </Card.Text>
              </Card>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
