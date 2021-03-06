# Note-Taker
An application called Note Taker that can be used to write and save notes

## Screenshots
*Command line*
![image](https://user-images.githubusercontent.com/74797740/109425458-36906500-79e0-11eb-999b-a67681f9cb0a.png)

![image]()

*Generated Sample HTML file*
![image]()

## Installation
In order to render this app, you will need to run `npm i express` in order to install the 'express' package dependencies as specified in the package.json.

The express package will give you access to a series of methods to `GET` and `POST` information from the API object created from user inputs. 

You will also need to specify a port number. In this app we have used `3000` but you can use any PORT that works well with Node applications. 

Once express is installed, you can initialise the application itself by running `node server.js` in the command line

## Test
There are no test packages on this app. However, you can use Chrome DevTools on your browser or run the server.js file in your command line to ensure there are no errors. 

## Usage 

*sample gif of deployed app*

*Please click the link below to see the deployed app*

[Note Taker]()

After running `node server.js` within the command line, the `listen` function of the express package will notify you that the server is listening to the port specified. 

In a browser of your choice, specify the route name e.g `localhost:3000/` and this will take you to the landing page of the app. 

Click on the 'Get Started' button and this will take you to the notes page (`localhost:3000/notes`) where you will see input fields to write in your notes. As soon as the input fields are populated, a save icon will appear at the top righthand corner of the nav bar to save your note. This note will be displayed on the lefthand side nav of the page with a delete icon.

If you wish to delete the note you have written, click on the delete button and it will remove the note from the page as well as the json file it is stored in. 

You can see the json object being populated or modified by specifiying the following route name in your browser: `localhost:3000/api/notes`

## Final Product
The generated HTML file should contain the following:

    - Navbar with team name
    - Generates a card for each team member with their name, their role and id
    - Manager should also have an office number
    - Engineer should have a github username
    - Intern should also a school name

## License
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

> This project was created under the standard MIT licence.

> [Learn more about this licence.](https://lbesson.mit-license.org/)