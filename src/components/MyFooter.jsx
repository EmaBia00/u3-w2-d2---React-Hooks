import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; 2024 EpiBook. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
