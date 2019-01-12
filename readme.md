# MEAN Stack boilerplate

This boilerplate divides frontend (Angular) and backend (MongoDB, Express, NodeJS) in `client` and `server` directories respectively.

## Quickstart

First, you need to install all dependencies with **npm** or **yarn** in three different directories: in root directory, in client directory and in server directory.

```shell
\> [npm install | yarn]
\> cd client
\client> [npm install | yarn]
\client> cd ../server
\server> [npm install | yarn]
\server> cd ..
```

Then, for security reasons file **server/.env** is included in **.gitignore** declarations, you need to rename (or duplicate and rename) **server/.env.example** file to **server/.env**

To run this project, you need to execute from root directory project in germinal:

```shell
\> [npm run | yarn] dev
```

Your default browser will open http://localhost:5000 url, it display a simple form with an input and a button, if you set your name (or whatever word) and push `Submit` button, Angular send GET request to Express server obtaining a `hello` message show inside an alert. You can see your request in server in your project terminal similar to:

```shell
[0] GET /api/v1/hello/stranger 200 0.523 ms - 29
```

## How to install more dependencies in client/server

If you need to install more dependencies to client/server, first your have to go to client/server directory and install it dependency, for example:

- To install **Compodoc** in frontend:
```shell
\> cd client
\client> [npm install --save | yarn add] @compodoc/compodoc
\client> cd ..
```
- To install **Socket.IO** in server:
```shell
\> cd server
\server> [npm install --save | yarn add] socket.io
\server> cd ..
```

**Important:** *package.json* allocated in root directory is used only to run client and server concurrently inside the same terminal and to execute some general scripts.

## Build production version

To build a production version, first you need to change *package.json* `build` script value, changing `https://127.0.0.1:3000` to your domain. You can keep localhost value `https://127.0.0.1:3000/` in `build` script too for do local production tests:

- Before:
```json
{
	"name": "mean-stack",
	...
	"scripts": {
		...
		"build": "cd client && ng build --prod --base-href https://127.0.0.1:3000/",
		...
	},
	...
}
```

- After:
```json
{
	"name": "mean-stack",
	...
	"scripts": {
		...
		"build": "cd client && ng build --prod --base-href https://ivanhdzd.github.io/",
		...
	},
	...
}
```

Then run `start` script:

```shell
\> [npm | yarn] start
```

Terminal shows similar to:

```shell
$ cd server && npm start

> server@1.0.0 start MEAN\server
> babel-node index.js

Express server running: http://127.0.0.1:3000
Connection to database successfully.
```

## Angular Client

[Angular client has it sugestions about how to use Angular-CLI in this project](./client/readme.md)