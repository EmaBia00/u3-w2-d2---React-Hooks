import { Alert, Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container className="mt-5">
      <Alert variant="warning">
        <Alert.Heading>Welcome to EpiBook!</Alert.Heading>
        <p>Your one-stop shop for amazing books products.</p>
      </Alert>
    </Container>
  );
};

export default Welcome;
