# Hello dear Jocyline and Abigael!

> If you would like to follow my structure for API features, I would use this folder to handle API request an then export then to their respective file on redux folder.

**These are the API actions we have to implement:**

## Marco: 

- Rservations: Create and Delete.

- Cars: Add (create new one) and Delete.

## Jocyline: 

- Cars: Post all cards on index page. 

## Abigael: 

- Cars: Show card details.

> I'm gonna leave created the files where the url's are going to be called and managed. Please look at the example below so you get what I mean:

- Example with axios: 

```
import axios from 'axios';

const url = 'https://pixabay.com/api/?key=15089766-5bf9896a3416c7dcc335047dc&q=anime&image_type=photo&pretty=true';

const getImages = async () => {
  const response = await axios.get(url);
  const { data } = response;
  const images = [];
  data.hits.map((image) => images.push(
    {
      url: image.webformatURL,
    },
  ));
  return images;
};

export default getImages;

```

- Example with JavaScript async await: 

```
const url = https://www.google.com;

const API_KEY = oi12u3oiu12o3uo1uoiu12oi3u;

const fetchMovie = async (movieId) => {
    const endpoint = `${url}movie/${movieId}?api_key=${API_KEY}`;
    const result = await (await fetch(endpoint)).json();
    return result;
}

export fetchMovie;

```

> As mentioned above, this is up to you if you want to follow the same structure, just wanted to keep all files in a smae place.

**Good luck, and happy coding!**

PD: I know Abigael loves me and Jocyline don't like red apples, that's why she prefers Samsung devises.