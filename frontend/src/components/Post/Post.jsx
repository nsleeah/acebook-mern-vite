import Comments from "../Comments/Comment";
import LikeButton from "../Likes/LikeButton";
import LikeCounter from "../Likes/LikeCounter";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Post = (props) => {
  const [likes, setLikes] = useState(props.post.likes);
  const formattedDate = new Date(props.post.createdAt).toLocaleString("en-GB");
  const username = props.post.createdBy.username;
  const userId = props.post.createdBy._id; // Assuming the user ID is available here
  const token = props.token; // Token passed as a prop
  const allowComments = props.allowComments;

  console.log("Image URL:", props.post.image);

  return (
    <article
      key={props.post._id}
      className="bg-slate-100 shadow-lg rounded-lg p-4 my-4 overflow-hidden"
    >
      <div className="space-y-4">
        <p className="text-gray-800 text-lg">{props.post.message}</p>
        {props.post.image && (
          <div className="w-full flex justify-center">
            <img
              src={props.post.image}
              alt={`Posted by ${username}`}
              className="max-w-full max-h-96 object-cover"
            />
          </div>
        )}
        <div className="text-sm">
          Posted by:{" "}
          <Link to={`/profile/${userId}`} className="text-blue-500">
            {" "}
            {/* Use Link component for routing */}
            {username}
          </Link>
        </div>
        <div className="text-xs text-gray-400">Posted on: {formattedDate}</div>
      </div>
      <Comments
        postId={props.post._id}
        token={token}
        username={username}
        allowComments={allowComments}
      />
      <LikeButton
        postId={props.post._id}
        postLikes={likes}
        setLikes={setLikes}
      />
      <LikeCounter likes={likes} />
    </article>
  );
};

export default Post;
