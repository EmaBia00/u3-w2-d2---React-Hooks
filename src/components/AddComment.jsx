import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ asin, onCommentAdded }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "comment") {
      setComment(value);
    } else if (name === "rate") {
      setRate(Number(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      comment,
      rate,
      elementId: asin
    };

    try {
      await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDEzMjhhZDEyOTAwMTU4NzZiYjgiLCJpYXQiOjE3MzI3OTgzMDIsImV4cCI6MTczNDAwNzkwMn0.7zkVPSItjo-2cKzYHlkKohHWDjiSFL_5q7A_s_O0COc",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
      });

      setComment("");
      setRate(1);
      onCommentAdded();
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <Form className="border border-1 p-3 mt-2 rounded" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Your Comment</Form.Label>
        <Form.Control type="text" name="comment" value={comment} onChange={handleInputChange} placeholder="Write your comment" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rate">
        <Form.Label>Rate (1 to 5)</Form.Label>
        <Form.Control type="number" name="rate" value={rate} onChange={handleInputChange} min="1" max="5" />
      </Form.Group>

      <Button className="mb-3" type="submit">
        Add Comment
      </Button>
    </Form>
  );
};

export default AddComment;
