
# Instructions

**Creating The Data**

- Create a new file called `weatherData.js` that contain an array of five objects with the following properties: `img`, `conditions` and `time`.
- Populate the objects based on the values from those elements in the HTML
- Export the file and import into `App.js`

**Creating The `WeatherIcons` Component**

- Look over the HTML structure used to create the weather icons
- Create a `WeatherIcons` Component based on the HTML structure
- Make sure to set the Component up to accept props and update the JSX to work with those props

**Rendering The `WeatherIcons` Component**

- Import the `WeatherIcons` Component into `App`
- Loop over the weatherData array data and create a `WeatherIcons` Component for each element passed
- In the loop pass the element the props it needs for img`, `conditions`and`time`.
- App will then render those `WeatherIcons` Components