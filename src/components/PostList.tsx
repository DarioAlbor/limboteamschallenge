import React from 'react';
import { Post } from '../types';
import PostItem from './PostItem';
import './PostList.scss';
import { motion } from 'framer-motion';

interface PostListProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const PostList: React.FC<PostListProps> = ({ posts, onPostClick }) => {
  return (
    <motion.div className="post-list" variants={containerVariants} initial="hidden" animate="visible">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onClick={onPostClick} />
        ))}
    </motion.div>
  );
};

export default PostList;