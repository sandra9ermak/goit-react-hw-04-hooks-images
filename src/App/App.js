import "./App.css";
import Searchbar from "../components/Searchbar/Searchbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";
import { getApi } from "../service/api";
import Notiflix from "notiflix";
import { useState, useEffect } from "react";

const App = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchForm, setSearchForm] = useState("");
  const [inputQuery, setInputQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  useEffect(() => {
    if (searchForm || page !== page) {
      renderImages();
    }
  }, [searchForm, page]);

  const renderImages = () => {
    setIsLoading(true);
    getApi(inputQuery, page)
      .then((hits) => {
        if (hits.length === 0) {
          return Notiflix.Notify.failure(
            `There is no results with ${searchForm.toUpperCase()} request`
          );
        }
        if (inputQuery.trim().length === 0) {
          return Notiflix.Notify.warning(
            `Please enter something in searchform`
          );
        }
        setImages([...images, ...hits]);
      })
      .catch((err) => setError(err))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    setInputQuery(e.target.value);
  };

  const submitSearchForm = (e) => {
    e.preventDefault();
    setSearchForm(inputQuery);
    if (inputQuery !== searchForm) {
      setPage(1);
      setImages([]);
    }
  };

  const handleButtonLoad = () => {
    setPage((prevState) => prevState + 1);
  };

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const showModalImg = ({ modalImage }) => {
    setModalImage(modalImage);
    openModal();
  };

  return (
    <div className="container">
      <Searchbar
        onSubmit={submitSearchForm}
        onChange={handleChange}
      ></Searchbar>
      {isLoading && <Loader></Loader>}
      {images.length !== 0 && (
        <ImageGallery
          images={images}
          isModalOpen={isModalOpen}
          showModalImg={showModalImg}
        ></ImageGallery>
      )}
      {images.length !== 0 && <Button onClick={handleButtonLoad}></Button>}
      {isModalOpen && (
        <Modal modalImage={modalImage} onClick={openModal}></Modal>
      )}
    </div>
  );
};

export default App;
