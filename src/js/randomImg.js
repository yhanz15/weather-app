import axios from 'axios';

export default async function fetchImages(weather) {
  const body = document.querySelector('body');
  const response = await axios.get(
    `https://pixabay.com/api/?key=43695781-37520996cf2f13ffb5a7a3fb5&q=${weather.city.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=10`,
  );
  const images = await response.data;
  if (images.totalHits === 0) {
    body.style.backgroundImage = `linear-gradient(0.56deg, #000000 -13.48%, rgba(0, 0, 0, 0) 78.75%), url("https://kingtur.ru/uploads/product_images/2636/17_img_6017.jpg")`;
    return;
  }
  body.style.backgroundImage = `linear-gradient(0.56deg, #000000 -13.48%, rgba(0, 0, 0, 0) 78.75%), url("${
    images.hits[Math.floor(Math.random() * images.hits.length)].largeImageURL
  }")`;
}
