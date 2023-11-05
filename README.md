# AI Website Summary Generator

This application allows users to type in a URL of a website, and recieve a AI generated summary of the webpage. Created for a takehome test. 

## Demonstration

https://github.com/sakisandrac/site-summary/assets/118419729/b4b8c3c5-bde1-42a5-8b9a-ce7666968467

## Technologies used:
This is a full stack application, using TypeScript and React for the frontend and Node.js with Express.js, Cheerio, and ChatGPT's OpenAI API in the backend. Built in roughly 4 hours. 

## How this application works:
The way this application works is that the user inputs a website into the form, which then sends URL to the backend through an API call. The backend takes the URL, fetches the HTML from the website, and then that HTML is parsed through Cheerio to only extract the main content on the page. That content is then sent to ChatGPT through a fetch request to the OpenAI API with a prompt asking ChatGPT to summarize the content it's given. The summary is then sent back to the user to display on the main page of the application.

## How to use:
- Fork/Clone this repo
- Go to the <a href="https://github.com/sakisandrac/site-summary-api">API repo</a> and fork/clone it down
- Download dependencies from both repos using `npm install`
- Start the API by running `npm start` in the terminal
- Start the frontened application by running `npm start` in the terminal
- Enter a valid URL in the text input box (error handling not yet included for bad URLs)
- Wait a bit for the ai generated summary (chatGPT sometimes takes a while, be patient)
<b>NOTE: to use the API you must add your own API key in a .env variable!)</b>
