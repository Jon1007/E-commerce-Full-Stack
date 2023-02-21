import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Image,
  Row,
  Alert, ListGroupItem,
} from "react-bootstrap";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";
import { Rating } from "react-simple-star-rating";

const ProductDetailsPage = () => {
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        <Col md={4}>
          <Image fluid src="/images/games-category.png" />
          <Image fluid src="/images/monitors-category.png" />
          <Image fluid src="/images/tablets-category.png" />
          <Image fluid src="/images/games-category.png" />
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
              <ListGroup.Item>Price : <span className="fw-bold">$345</span></ListGroup.Item>
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
              <ListGroup.Item>Cars justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilities</ListGroup.Item>
            </ListGroup>
            <ListGroup.Item>Morbi leo resus</ListGroup.Item>

          </Col>
        </Row>
        <hr />
        send review form
        <Alert variant="danger">Login first to write a review</Alert>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Button variant="primary">Primary</Button>
        </Form>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
