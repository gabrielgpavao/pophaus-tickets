# PopHaus Tickets Server

Responsive interface of a messaging application that simulates sending and receiving SMS in real time using tools such as React (Vite), TypeScript and Styled-Components.

## Running Locally Guide

Once you have cloned this repository on your machine, follow these next steps:

### Install Dependencies
Run:

```bash
$ npm install
```

### Enviroment Variables

Create a `.env` file from the .env.example file by running:

```bash
$ cp .env.example .env
```

Then assign the values to each variable.

### Run the App

```bash
$ npm run dev
```

### Http Client

This project has a http_client folder that contains two `.http` files where you can test the server routes.

>**Note**: You need to have the [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VS Code extension installed.