# Mood-based Music Recommendation App

Built with JavaScript, Google Vision API, and Spotify API

## Installation

Node.js and npm must be installed.

Once installed, clone the repository and install its dependencies running:

    $ npm install
    
### Using your own credentials

You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application. For the examples, we registered these Redirect URIs:

* http://localhost:8888 (needed for the implicit grant flow)
* http://localhost:8888/callback

Once you have created your app, replace the `client_id`, `redirect_uri` and `client_secret` in the examples with the ones you get from My Applications.

## Running the application

    $ cd authorization_code
    $ node app.js

Then, open `http://localhost:8888` in a browser.
Open `http://localhost:8888/login` to log in.
