import { useEffect, useState } from 'react';
import { Image } from '../../models/ImageModel';

import './App.css';
import { searchImages } from '../../unsplash-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const [gallery, setGallery] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [lastPage, setLastPage] = useState<number>(0);

  const onSubmit = (query: string) => {
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

  const loadMore = (): void => {
    setPage(page + 1);
  };
  const showLoadMore = gallery.length > 0 && page !== lastPage;

  const openModal = (bigSize: string): void => {
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
