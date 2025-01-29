import React from 'react';
import { Post } from '../types';
import './PostItem.scss';
import { motion } from 'framer-motion';

interface PostItemProps {
  post: Post;
  onClick: (post: Post) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
  exit: { opacity: 0, y: -50 }
};

const PostItem: React.FC<PostItemProps> = ({ post, onClick }) => {
  return (
    <motion.div
      className="post-item"
      onClick={() => onClick(post)}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}...</p>
    </motion.div>
  );
};

export default PostItem;