# iTunes Search App

## Description
The iTunes Search App is a web application that allows users to search for media content using the iTunes Search API. Users can search for various types of media, view the results, and add items to a favourites list.

## Purpose
The purpose of this application is to provide a user-friendly interface for searching and discovering media content available on iTunes. Users can easily search for movies, podcasts, music, audiobooks, short films, TV shows, software, and eBooks.

## Key Features
- **Search Input**: Users can enter a search term and select the type of media they want to search for.
- **Results Display**: Search results are displayed attractively with album cover images, collection names, artist names, and release years.
- **Favourites List**: Users can add and remove items from a favourites list. The list of favourite content does not need to be remembered when the user exits the application.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Server-side
1. Navigate to the `server` directory:
   ```sh
   cd /itunes-search-app (resubmission)/server:
2. Install dependencies
   npm install
3. Start the server:
   npm start

### Client-side
1. Navigate to the `client` directory:
   ```sh
   cd /itunes-search-app (resubmission)/client:
2. Install dependencies:
   npm install
3. Start the client:
   npm start

## Usage
1. Open your browser and navigate to http://localhost:3000.
2. Enter a search term and select the type of media you want to search for.
3. Click the "Search" button to view the results.
4. Add items to your favourites list by clicking the "Add to Favourites" button.
5. Remove items from your favourites list by clicking the "Remove from Favourites" button.

## Technologies Used

- React: For building the user interface.
- Axios: For making HTTP requests to the iTunes Search API and the backend server.
- Node.js: For the backend server.
- Express: For handling API requests on the backend server.
- JSON Web Tokens (JWT): For securing API requests.

## License
This project is licensed under the MIT License.


