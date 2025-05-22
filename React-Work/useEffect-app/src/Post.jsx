import { useState, useEffect } from "react";
import "./Post.css";

function Post({post,selectedPostId, setSelectedPostId}) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((error) => console.warn("Error fetching data:", error));
    }, []);
    
    return (
        <>
        <div className="post-card">
            <span className="card-title">{post.title}</span>
            <p>{post.body}</p>
            <span className="comment-link" onClick={() => setSelectedPostId(post.id)}>
                open comments
            </span>
        </div>
        {selectedPostId === post.id && (
            <div className="comment-wrapper">
                {comments.map((c) => (
                    <div key={c.id} className="comment post-card">
                        <span className="card-title">{c.name}</span>
                        <p>{c.body}</p>
                    </div>
                ))}
            </div>
        )}
        </>
    );
}
export default Post;