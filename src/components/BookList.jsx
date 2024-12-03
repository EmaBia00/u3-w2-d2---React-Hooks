import { Row, Col, Container } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Component } from "react";

class BookList extends Component {
  render() {
    const { books, selectedBookAsin, onBookSelect } = this.props;

    return (
      <Container className="mt-5">
        <h2 className="text-center mb-2">Esplora i nostri libri fantasy</h2>
        <Row>
          <Col xs={6} md={8}>
            <Row>
              {books.map((book) => (
                <Col key={book.asin} xs={12} md={6} lg={3} className="mb-4">
                  <SingleBook book={book} isSelected={book.asin === selectedBookAsin} onSelect={onBookSelect} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={6} md={4}>
            {selectedBookAsin && <CommentArea asin={selectedBookAsin} />}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
