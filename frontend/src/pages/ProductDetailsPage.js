import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Image,
  Row,
  Alert,
} from "react-bootstrap";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";
import { Rating } from "react-simple-star-rating";

import ImageZoom from "js-image-zoom";
import { useEffect } from "react";

const ProductDetailsPage = () => {
  var options = {
    width:400,
    zoomWidth:500,
    fillContainer:true,
    zoomPosition:"center",
    scale: 2,
    offset: { vertical: 0, horizontal: 0 },
  };

  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options);
    new ImageZoom(document.getElementById("second"), options);
    new ImageZoom(document.getElementById("third"), options);
    new ImageZoom(document.getElementById("fourth"), options);
  });
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        <Col style={{ zIndex: 1 }} md={4}>
          <div id="first">
            <Image
              crossOrigin="anonymous"
              fluid
              src="/images/games-category.png"
            />
          </div>
          <br />
          <div id="second">
            <Image fluid src="/images/monitors-category.png" />
          </div>
          <br />
          <div id="third">
            <Image fluid src="/images/tablets-category.png" />
          </div>
          <br />
          <div id="fourth">
            <Image fluid src="/images/games-category.png" />
          </div>
          <br />
        </Col>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>Product name</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating readonly size={20} initialValue={4} /> (1)
            </ListGroup.Item>
            <ListGroup.Item>
              Price<span className="fw-bold">$345</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              Porta ac Porta ac cons Porta ac constructor tructor Porta ac
              constructor constructor
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Row>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>Status: in stock</ListGroup.Item>
              <ListGroup.Item>
                Price : <span className="fw-bold">$345</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Quantity:
                <Form.Select size="lg" aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option>1</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                </Form.Select>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="danger">Add to cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5">
            <h5>REVIEWS</h5>
            <ListGroup variant="flush">
              {Array.from({ length: 10 }).map((item, idx) => (
                <ListGroup.Item key={idx}>
                  John Doe <br />
                  <Rating readonly size={20} initialValue={4} />
                  <br />
                  20-09.2005 <br /> Enovi ProBalanceΩ Ball Chair, Yoga Ball
                  Chair Exercise Ball Chair with Slipcover and Base for Home
                  Office Desk, Birthing
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <hr />
        send review form
        <Alert variant="danger">Login first to write a review</Alert>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Write review</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Your rating</option>
            <option value="5">5(very good)</option>
            <option value="4">4 (good)</option>
            <option value="3">3 (average)</option>
            <option value="2">2 (bad)</option>
            <option value="1">1 (awful)</option>
          </Form.Select>
          <Button className="mb-3 mt-3" variant="primary">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
