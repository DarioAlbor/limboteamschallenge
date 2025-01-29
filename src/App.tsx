import React, { useEffect, useState } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostModal from './components/PostModal';
import { Post } from './types';
import { fetchPosts } from './services/api';

const POSTS_PER_PAGE = 10;

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const fetchedPosts = await fetchPosts(currentPage, POSTS_PER_PAGE, query);
      setPosts(fetchedPosts);
      // limitado a 100 post para evitar agotamiento
      setTotalPages(Math.ceil(100 / POSTS_PER_PAGE));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [currentPage, query]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="App">
      <h1>Listado de Publicaciones</h1>
      <SearchBar query={query} setQuery={setQuery} />
      {loading ? (
        <p>Cargando publicaciones...</p>
      ) : (
        <>
          <PostList posts={posts} onPostClick={handlePostClick} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
      {selectedPost && (
        <PostModal post={selectedPost} onClose={handleCloseModal} />
      )}
    </div>
  );
}
export default App;