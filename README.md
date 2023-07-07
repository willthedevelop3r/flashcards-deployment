# flashcards-deployment

Directions and backend code to enable deployment of the flashcards app

## Overview

The flashcards app is difficult to deploy because of the way its backend is set up to also run locally. This repo will walk you through separating out your frontend code from the backend code and deploying both using Render.

## Deploying the Backend

1. Fork this repository.
2. Go to [Render](https://render.com) and create a new Web Service.
3. Connect the Web Service to your forked version of this repository.
4. On the resulting form, give your service a name like `flashcards-backend`. Change the "start command" to `npm start`, and change the instance type to free. Click the "Create Web Service" button and allow the site to deploy.
5. Confirm that you can visit the `/decks` route on your deployment and see decks data.
6. Note the URL at which you've deployed the backend for future use.

## Setting Up the Frontend For Deployment

1. Open your existing flashcards code.
2. In `src/utils/api/index.js`, change line 5 to:

    ```js
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";
    ```

3. Add, commit, and push all your changes to GitHub.
4. Deploy to Render by connecting the GitHub repo with a Static Site.
5. Follow [Render's directions](https://render.com/docs/deploy-create-react-app#using-client-side-routing) to enable refreshing the page on your app.

## Connecting Your Deployed Frontend & Backend

1. Open the Render dashboard for your React frontend.
2. On the left, select "Environment". 
3. At the top, add an environment variable. Give it a key of `REACT_APP_API_BASE_URL`, and a value of your deployed backend URL, through the `onrender.com` with NO trailing slash.
![Screenshot of adding the environment variable](image.png)
4. Your React site will redeploy. When it finishes, you should be able to click the link to your deployed frontend, and your flashcards app should work on Render!
