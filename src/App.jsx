import { useEffect, useState } from 'react';

import './App.css';
import { searchImages } from './unsplash-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [lastPage, setLastPage] = useState(0);

  const onSubmit = query => {
    setPage(1);
    setQuery(query);
    setGallery([]);
    setErrorMessage(false);
  };

  useEffect(() => {
    async function fetchImage() {
      if (query === '') {
        return;
      }
      setIsLoading(true);
      try {
        const data = await searchImages(query, page);

        setGallery([...gallery, ...data.results]);
        setLastPage(data.total_pages);
      } catch (error) {
        setErrorMessage(true);
      }

      setIsLoading(false);
    }
    fetchImage();
  }, [query, page]);

  const loadMore = () => {
    setPage(page + 1);
  };
  const showLoadMore = gallery.length > 0 && page !== lastPage;

  const openModal = bigSize => {
    setModalIsOpen(true);
    setImageUrl(bigSize);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {isLoading && <Loader></Loader>}
      <SearchBar onSubmit={onSubmit}></SearchBar>
      <ImageGallery openModal={openModal} gallery={gallery}></ImageGallery>
      {showLoadMore && <LoadMoreBtn loadMore={loadMore}></LoadMoreBtn>}
      {errorMessage && <ErrorMessage></ErrorMessage>}
      <ImageModal
        modalIsOpen={modalIsOpen}
        modalClose={closeModal}
        imageUrl={imageUrl}
      ></ImageModal>
    </>
  );
}

export default App;
