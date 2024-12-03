const SingleComment = ({ comment }) => {
  return (
    <div className="mb-3 p-3 border rounded">
      <p>{comment.comment}</p>
      <small>
        <strong>Rating: </strong>
        {comment.rate}
      </small>
    </div>
  );
};

export default SingleComment;
