import { useQuery } from '@tanstack/react-query';
import { fetchComments } from './api';
import './PostDetail.css';

export function PostDetail({ post, deleteMutation }) {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['comments', post.id],
    queryFn: () => fetchComments(post.id),
  });

  if (isLoading) return <h3>Loading post</h3>;

  if (isError)
    return (
      <>
        <h3>Ooops, something went wrong!</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <>
      <h3 style={{ color: 'blue' }}>{post.title}</h3>
      <>
        <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button> <button>Update title</button>
        {deleteMutation.isPending && <p className="loading">Deleting the post</p>}
        {deleteMutation.isError && <p className="error">Error deleting the post: {deleteMutation.error.toString()}</p>}
        {deleteMutation.isSuccess && <p className="success">Post was (not) deleted!</p>}
      </>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
