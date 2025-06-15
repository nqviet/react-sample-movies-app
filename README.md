# Project - Movies

**Movies** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3).

- Total time: 48 hours

## User Stories

The following **required** functionality is completed:

- [ ] User can view a list of movies currently playing in theaters. Poster images load asynchronously.
- [ ] Add a tab bar for **Now Playing** and **Top Rated** movies.
- [ ] Add a search bar.
- [ ] User can view movie details by tapping on a cell.
- [ ] User sees loading state while waiting for the API.
- [ ] User sees an error message when there is a network error.
- [ ] Simple responsive.

The following **optional** features are implemented:

- [ ] Implement segmented control to switch between list view and grid view.
- [ ] All images fade in.
- [ ] Implement lazy load image.
- [ ] Customize the highlight and selection effect of the cell.
- [ ] Improve UX loading by skeleton loading.
- [ ] Enhance responsive.

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app functionality!

## Requirements

- Please use ReactJS with typescript
- Please use SCSS
- Please do not use any CSS/SCSS framework or UI library

## Video Walkthrough

Here's a walkthrough of implemented user stories:

https://drive.google.com/file/d/1cF9mH5ZzAUT-MkUeARSVyez5rVg3TT1w/view?usp=sharing

## Submit


## License

```txt
Copyright [2025] [Nguyen Quoc Viet]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

---

## Prerequisites
- NodeJS v22+

## Configuration

- TMDB_API_KEY: themoviedb API key
- FEATURE_LIST_VIEW_GRID_VIEW: `true` to enable the list-grid switch
- FEATURE_FADE_IN_IMAGE: `true` to enable the image fade-in effect
- FEATURE_LAZY_LOAD_IMAGE: `true` to enable the image lazy load
- FEATURE_HIGHLIGHT_EFFECT: `true` to enable the movie card highlight effect
- FEATURE_SKELETON_LOADING: `true` to enable the loading skeleton

The environment variables can be set in `.env` in the root directory.

## Local deployment

1. Install packages
  ```bash
  npm install
  ```
2. Run the app
  ```bash
  npm run dev
  ```

3. Open the app at `http://localhost:8080`
