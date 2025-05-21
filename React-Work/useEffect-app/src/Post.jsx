import { useState, useEffect } from "react";
import "./App.css";

function Post({post,selectedPostId, setSelectedPostId}) {
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((error) => console.warn("Error fetching data:", error));
    }, []);
    
    return (
        <>
        <h1>Posts</h1>
        <ul>
            {posts.map((post) => (
            <li key={post.id} onClick={() => setCurrentPost(post)}>
                {post.title}
            </li>
            ))}
        </ul>
        {currentPost && (
            <div>
            <h2>{currentPost.title}</h2>
            <p>{currentPost.body}</p>
            </div>
        )}
        </>
    );
}
export default Post;