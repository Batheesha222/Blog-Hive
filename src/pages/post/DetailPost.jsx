import { useNavigate, useParams } from "react-router-dom";
import placeImage from "../../assets/images/place.jpeg";
import { useState, useEffect } from "react";
import axios from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import moment from "moment";

const DetailPost = () => {
  const [post, setPost] = useState(null);
  const [fileUrl,setFileUrl] = useState(null)

  const navigate = useNavigate();
  const params = useParams();

  const postId = params.id;

  useEffect(() => {
    if (postId) {
      const getPost = async () => {
        try {
          //api request
          const response = await axios.get(`/posts/${postId}`);
          const data = response.data.data;

          setPost(data.post);

        } catch (error) {
          const response = error.response;
          const data = response.data;

          toast.error(data.message);
        }
      };
      getPost();
    }
  }, [postId]);

  useEffect(() => {
    if (post && post?.file) {
      const getFile = async () => {
        try {
          // api request
          const response = await axios.get(
            `/file/signed-url?key=${post.file.key}`
          );
          const data = response.data.data;

          setFileUrl(data.url);
        } catch (error) {
          const response = error.response;
          const data = response.data;
          toast.error(data.message);
        }
      };

      getFile();
    }
  }, [post]);

  return (
    <div>
      <button className="button button-block" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <button
        className="button button-block"
        onClick={() => navigate("/posts/update-post")}
      >
        Update Post
      </button>
      <button className="button button-block">Delete Post</button>
      <div className="detail-container">
        <h2 className="post-title">Title : {post?.title}</h2>
        <h5 className="post-category">Category : {post?.category?.title}</h5>
        <h5 className="post-category">Created at:
          {moment(post?.createdAt).format("YYYY-MM-DD HH:mm:ss")}
        </h5>
        <h5 className="post-category">Updated at:
          {moment(post?.updatedAt).format("YYYY-MM-DD HH:mm:ss")}
        </h5>
        <p className="post-desc">{post?.desc}</p>

        <img src={fileUrl} alt="pic" />
      </div>
    </div>
  );
};

export default DetailPost;
