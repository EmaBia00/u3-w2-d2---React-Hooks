import { ListGroup, Button } from "react-bootstrap";

const CommentsList = ({ comments, onDelete }) => {
  return (
    <ListGroup>
      <h4>COMMENTS:</h4>
      {comments.map((comment) => (
        <ListGroup.Item key={comment._id} className="d-flex justify-content-between align-items-center">
          <div>
            <span>{comment.comment}</span> <br />
            <span>Rating: {comment.rate}</span>
          </div>
          <Button variant="danger" onClick={() => onDelete(comment._id)} style={{ marginLeft: "10px" }}>
            🗑️
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentsList;
