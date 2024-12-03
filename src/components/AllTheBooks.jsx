import { Card, Col, Row, Container } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json"; //Da sistemare che ci sono pià generi da inserire e non solo il fantasy

const AllTheBooks = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Explore Our Fantasy Books</h2>
      <Row>
        {fantasyBooks.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="card-custom">
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ${book.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
