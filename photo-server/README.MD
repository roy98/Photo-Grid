# Photo Grid BACKEND API

A simple API for Gallery

## Tools

### Node, Express, MongoDB

This project will run on **NodeJs** using **MongoDB** as database.

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```bash
    cp .env.example .env
    ```

## Project structure

```sh
.
├── app.js
├── package.json
├── bin
│   └── www
├── controllers
│   ├── PhotosController.js
├── models
│   ├── PhotoModel.js
├── routes
│   ├── api.js
│   ├── index.js
│   └── photo.js
├── helpers
│   ├── apiResponse.js
├── test
│   ├── testConfig.js
│   ├── photo.js
└── public
    ├── index.html
    └── stylesheets
        └── style.css
```

## How to run

### Running API server locally

```bash
npm run dev
```

You will know server is running by checking the output of the command `npm run dev`

```bash
Connected to mongodb:YOUR_DB_CONNECTION_STRING
App is running ...

Press CTRL + C to stop the process.
```

## Tests

### Running Test Cases

```bash
npm test
```

### Online API Address

[https://photo-grid-api.herokuapp.com/]('https://photo-grid-api.herokuapp.com/')

```bash
    ## Endpoint:
        - /api/photos/
    ## Params
        - page : `Current page`
        - per_page: `Number of photo per page. Default 10`
```
