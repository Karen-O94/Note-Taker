# Note-Taker
An application can be used to write, save and delete notes

## Screenshots of App in Use
*Generated Sample HTML file*
![image](https://user-images.githubusercontent.com/74797740/110216984-891ec500-7ea9-11eb-84cb-405f59f5d2f2.png)

![image](https://user-images.githubusercontent.com/74797740/110217050-edda1f80-7ea9-11eb-90c9-b61b83ff9a1e.png)

## Installation
In order to render this app, you will need to run `npm i express` in order to install the 'express' package dependencies as specified in the package.json.

The express package will give you access to a series of methods to `GET` and `POST` information from the API object created from user inputs. 

You will also need to specify a port number. In this app we have used `3000` but you can use any PORT that works well with Node applications. 

Once express is installed, you can initialise the application itself by running `node server.js` in the command line

## Test
There are no test packages on this app. However, you can use Chrome DevTools on your browser or run the server.js file in your command line to ensure there are no errors. 

## Usage 
*Please click the link below to see the deployed app*

[Note Taker](https://uob-note-taker.herokuapp.com/)

After running `node server.js` within the command line, the `listen` function of the express package will notify you that the server is listening to the port specified. 

In a browser of your choice, specify the route name e.g `localhost:3000/` and this will take you to the landing page of the app. 

Click on the 'Get Started' button and this will take you to the notes page (`localhost:3000/notes`) where you will see input fields to write in your notes. As soon as the input fields are populated, a save icon will appear at the top righthand corner of the nav bar to save your note. This note will be displayed on the lefthand side nav of the page with a delete icon.

If you wish to delete the note you have written, click on the delete button and it will remove the note from the page as well as the json file it is stored in. 

You can also view 

You can see the json object being populated or modified by specifiying the following route name in your browser: `localhost:3000/api/notes`

*Command line*
![image](https://user-images.githubusercontent.com/74797740/110217124-4f01f300-7eaa-11eb-9c42-bbe8487135f7.png)

*API object*
![image](https://user-images.githubusercontent.com/74797740/110217101-398cc900-7eaa-11eb-939d-785e7e44aaee.png)


## License
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

> This project was created under the standard MIT licence.

> [Learn more about this licence.](https://lbesson.mit-license.org/)

## Questions?

Please contact me on the links below if you have any queries on how the application works or to view my other projects:

My GitHub username is Karen-O94 

Link to GitHub Profile: https://github.com/Karen-O94

Email:  karen@email.com