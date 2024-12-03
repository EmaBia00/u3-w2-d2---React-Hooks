import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (asin) {
      fetchComments();
    }
  }, [asin]);

  const fetchComments = async () => {
    if (!asin) return;

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDEzMjhhZDEyOTAwMTU4NzZiYjgiLCJpYXQiOjE3MzI3OTgzMDIsImV4cCI6MTczNDAwNzkwMn0.7zkVPSItjo-2cKzYHlkKohHWDjiSFL_5q7A_s_O0COc"
        }
      });
      const data = await response.json();
      setComments(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setLoading(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDEzMjhhZDEyOTAwMTU4NzZiYjgiLCJpYXQiOjE3MzI3OTgzMDIsImV4cCI6MTczNDAwNzkwMn0.7zkVPSItjo-2cKzYHlkKohHWDjiSFL_5q7A_s_O0COc"
        }
      });
      fetchComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleNewComment = () => {
    fetchComments();
  };

  return (
    <Container className="mt-4">
      {asin ? (
        <Row>
          <Col>
            {loading ? (
              <p>Loading comments...</p>
            ) : (
              <div>
                <CommentsList comments={comments} onDelete={handleDeleteComment} />
              </div>
            )}
            <AddComment asin={asin} onCommentAdded={handleNewComment} />
          </Col>
        </Row>
      ) : (
        <p>Select a book to see comments.</p>
      )}
    </Container>
  );
}

export default CommentArea;
