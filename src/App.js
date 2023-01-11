import { useState } from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    console.log(result);
    setImages(result);
  };
  return (
    <h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </h1>
  );
};

export default App;
