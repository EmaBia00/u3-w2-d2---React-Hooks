import { Card } from "react-bootstrap";

function SingleBook({ book, isSelected, onSelect }) {
  const handleSelect = () => {
    onSelect(book.asin);
  };

  return (
    <Card
      className={`cursor-pointer ${isSelected ? "border-danger border-3" : "border-light"} shadow-sm`}
      onClick={handleSelect}
      style={{ width: "100%", cursor: "pointer" }}
    >
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ${book.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
