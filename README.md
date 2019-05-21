#Stackoverflow

This is a sample repo for the popular Q&A platform, Stackoverflow. Users can sign up/in to the platform, post and/or answer questions.

## Prerequisites

- [VS Code](https://code.visualstudio.com) / [WebStorm](https://www.jetbrains.com/webstorm/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com) / [yarn](https://yarnpkg.com/en/)
- [Insomnia](https://insomnia.rest) / [Postman](https://www.getpostman.com)
- [Mysql](https://www.mysql.com)

## Project setup

This project setup assumes you're using a Linux based development environment ([Linux Mint](https://linuxmint.com)). Steps for other platforms e.g. Windows and MacOS may be different. Check up relevant guides for those platforms.

- Clone the repo

```console
foo@bar:~$ git clone https://github.com/tirgei/stackoverflow.git
```

- Create the mysql databases

```console
foo@bar:~$ mysql -u {database username} -p
foo@bar:~$ create database stackoverflow_db
```

- CD into the project folder

```console
foo@bar:~$ cd stackoverflow/
```

- Install the project dependencies

```console
foo@bar:~$ npm install
```

- Set your environment variables i.e. rename the `.env.example` file to `.env` then edit to your specific configuration

```console
foo@bar:~$ mv .env.example .env
```

- Open 2 terminal sessions to run the app. First terminal session is for compiling the Typescript files to Javascript. Other terminal session is for running the [expressjs](https://expressjs.com) server

1. Terminal 1

```console
foo@bar:~$ npm run watch-ts
```

2. Terminal 2

```console
foo@bar:~$ npm run watch-node
```

## API Endpoints

Base URL for the local server is `http://localhost/`

#### User Endpoints

| **HTTP METHOD** | **URI** | **ACTION** |
| --- | --- | --- |
| **POST** | `dev/v1/auth/register` | Register a new user |
