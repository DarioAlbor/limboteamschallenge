import React, { useEffect, useState } from 'react';
import { Post, User } from '../types';
import { fetchUser } from '../services/api';
import './PostModal.scss';
import { motion } from 'framer-motion';

interface PostModalProps {
  post: Post;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  const [author, setAuthor] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUser(post.userId);
        setAuthor(userData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [post.userId]);

  return (
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {loading ? (
          <p>Cargando autor...</p>
        ) : author ? (
          <p><strong>Autor:</strong> {author.name}</p>
        ) : (
          <p>Autor no disponible</p>
        )}
      </div>
    </motion.div>
  );
};

export default PostModal;