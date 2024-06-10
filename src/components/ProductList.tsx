import React from 'react';
import Link from 'next/link';

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
};

type PostListProps = {
    posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h2>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
