import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    loading: true
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  componentDidMount() {
    if (this.props.asin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    if (!this.props.asin) return; // Se non c'è una card selezionata, non viene esguita la fetch

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDEzMjhhZDEyOTAwMTU4NzZiYjgiLCJpYXQiOjE3MzI3OTgzMDIsImV4cCI6MTczNDAwNzkwMn0.7zkVPSItjo-2cKzYHlkKohHWDjiSFL_5q7A_s_O0COc"
        }
      });
      const data = await response.json();
      this.setState({ comments: data, loading: false });
    } catch (error) {
      console.error("Error fetching comments:", error);
      this.setState({ loading: false });
    }
  };

  handleDeleteComment = async (commentId) => {
    try {
      await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDEzMjhhZDEyOTAwMTU4NzZiYjgiLCJpYXQiOjE3MzI3OTgzMDIsImV4cCI6MTczNDAwNzkwMn0.7zkVPSItjo-2cKzYHlkKohHWDjiSFL_5q7A_s_O0COc"
        }
      });
      this.fetchComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  handleNewComment = () => {
    this.fetchComments();
  };

  render() {
    const { comments, loading } = this.state;

    return (
      <Container className="mt-4">
        {this.props.asin ? (
          <Row>
            <Col>
              {loading ? (
                <p>Loading comments...</p>
              ) : (
                <div>
                  <CommentsList comments={comments} onDelete={this.handleDeleteComment} />
                </div>
              )}
              <AddComment asin={this.props.asin} onCommentAdded={this.handleNewComment} />
            </Col>
          </Row>
        ) : (
          <p>Select a book to see comments.</p>
        )}
      </Container>
    );
  }
}

export default CommentArea;
