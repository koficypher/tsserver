# TS Node Server

A node server written in [Typescript](https://www.typescriptlang.org/) with [Sequelize ORM](https://sequelize.org/master/) for database integration which follows the class based approach.

## Installation

1. Clone this repo using the command `git clone https://github.com/koficypher/tsserver`
2. Install the dependencies using the `npm install` command.
3. Run `cd tsserver` to move into the directory and run `npm run start` to start the server.
4. This setup comes with an SQlite DB dialect and its in memory option. Run this command in another terminal instance if you have curl installed `curl -H "Content-Type: application/json" -X POST -d @card_data.json http://localhost:5000/cards`

## Sqlite issues

If your setup encounters errors concerning the sqlite driver or specifically the error `Please install sqlite3 manually` kindly run the following command to mitigate it `npm i sqlite3 -D && rm -rf node_modules && npm i && npm rebuild`
