# Project - Movies

**Movies** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3).

- Total time: 48 hours

## User Stories

The following **required** functionality is completed:

- [x] User can view a list of movies currently playing in theaters. Poster images load asynchronously.
- [x] Add a tab bar for **Now Playing** and **Top Rated** movies.
- [x] Add a search bar.
- [x] User can view movie details by tapping on a cell.
- [x] User sees loading state while waiting for the API.
- [x] User sees an error message when there is a network error.
- [x] Simple responsive.

The following **optional** features are implemented:

- [x] Implement segmented control to switch between list view and grid view.
- [x] All images fade in.
- [x] Implement lazy load image.
- [x] Customize the highlight and selection effect of the cell.
- [x] Improve UX loading by skeleton loading.
- [x] Enhance responsive.

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

https://github.com/nqviet/react-sample-movies-app

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
