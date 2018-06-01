# REACT WEATHER APP

![Imgur](https://i.imgur.com/4h8vHuO.png?1)

> [Other Weather App Screen Shots - Full Color Palette](https://imgur.com/a/5tDfZos)

## Weather App Details

Weather App using React, Axios, Material UI, Firebase, Yahoo Weather API.

This quick and simple mobile app was built in order to solidify my foundation for ReactJS in my developer boot camp.  I built this as an extra project on my own to make sure that I had a good handle on the basic concepts of ReactJS.

This was first built by fetching data from the Yahoo Weather API and using Axios to handle the API requests.  Axios ensured that I can handle my API requests with each search that is performed, without further complicating my app life cycle.  Components were then rendered out using ReactJS and Material UI.  Material UI was used to help with a responsive UX and UI, and helped to maintain styling.  I also added styling that that uses a color palette based on the temperature from hot to cold.  Screenshots of the color palette in the app can be found [here](https://imgur.com/a/5tDfZos).  Finally I have added Firebase in to allow for user authentication via Google.  This is still a work in progress as I plan on adding further functionality in the future.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone git@github.com:theranbrig/weather-app # or clone your own fork
cd weather-app
npm install
npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Technologies Used

* [ReactJS](https://github.com/facebook/react/)
* [MaterialUI](https://github.com/mui-org/material-ui)
* [Axios](https://github.com/axios/axios)
* [Firebase](https://github.com/firebase/)
* [Yahoo! Weather API](https://developer.yahoo.com/weather/?guccounter=1)

### Future Planned Updates

* Adding saved city lists for registered users.
* Full menu functionality.
* Refactoring menu and search bar as separate components.

## Contact

Theran Brigowatz - theran.brigowatz@gmail.com