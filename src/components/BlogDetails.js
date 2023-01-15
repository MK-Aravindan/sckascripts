import { useHistory, useParams } from "react-router-dom";
import UseFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs, isPending } = UseFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <div>{blogs.body}</div>
          <h4>Written by {blogs.author}</h4>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
