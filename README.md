# Halp 🤔
#### Realtime chat platform between users and customer service.

---

### Dev quickstart

- [Install NodeJS](https://nodejs.org/es/download/)
- [Install RethinkDB](https://www.rethinkdb.com/docs/install/)
- Install Horizon: `npm i -g horizon`
- `/client` and `/backoffice` are both npm projects, so go to each of them and `npm i`
- Start the RethinkDB database: `rethinkdb`
- Go to `/horizon` and start the Horizon server: `hz serve`.
- Start a test page with the client librart: go to `/client` and `npm start`. This will open a navigator with a blank page and the embedded chat.
- Launch the backoffice project: go to `/backoffice` and `npm start`, then open a brower and go to `localhost:4200`


##### Default ports
- RethinkDB plugin interface: `28015`
- RethinkDB control panel: `8080`
- Horizon server: `8181`
- Client test page: `8081`
- Backoffice: `4200`

---

### Client

The client project is meant to be used as a Javascript standalone library. The idea is to include the script in any page, and a chat bubble will appear at the bottom right side, with a fixed position (similar to Drift or Intercom).

The standalone script has no dependencies for the user, and can be generated by executing `npm run build` inside the `/client` directory; after finished, a `dist` folder should appear with the script inside.

The chat will only appear if the browser can establish a connection (websocket) with the Horizon server. If the connection is lost, the chat will disappear.

Once the chat is loaded, the user will be assigned a unique session id, which will be stored in his browser's `localStorage`. Every message he send will be tied with that session.


### Backoffice

The backoffice project is a single page application meant to be used by the customer service. It consists of a list of chats, one for every unique session with at least one message (the conversations are always started by the users). Each chat is collapsible, and has the time and date of the last message sent.

---

### Frameworks/libraries/projects used

##### [· RethinkDB](https://www.rethinkdb.com/) ([GitHub](https://github.com/rethinkdb/rethinkdb))
Realtime JSON database (similar to Firebase but open source). It offers a way to connect a socket directly to a collection and get a realtime feed of the changes, which makes it ideal for a chat.

##### [· Horizon](https://web.archive.org/web/20170707182557/http://horizon.io:80/) ([GitHub](https://github.com/rethinkdb/horizon))
Platform built on top of RethinkDB (by the same dev team). Offers a comprehensible way to create a full application based on it. Unfortunately it was abandoned some time ago by the dev team (even the official web page is down), but is still a powerful tool to create a realtime application without writing a single line of backend code.

##### [· React](https://reactjs.org/) ([GitHub](https://github.com/facebook/react))
I use React to render the chat in the client library. Very simple usage. Started the project using my own [Babel boilerplate](https://github.com/Nymoth/boilerplate).

##### [· Emotion](https://emotion.sh/) ([GitHub](https://github.com/emotion-js/emotion))
Super powerful CSS-in-JS library used to style the chat in the React part.

##### [· Angular](https://angular.io/) ([GitHub](https://github.com/angular/angular))
SPA framework used to create the backoffice frontend. Super fast development and really great data flow with rxjs.

##### [· Angular CLI](https://cli.angular.io/) ([GitHub](https://github.com/angular/angular-cli))
Easy to use CLI to build Angular apps. Creates the whole structure, and has commands to create services, components, etc. Also comes with both the unit test suite and e2e tests configured as well as Webpack and Typescript.

##### [· Angular Material](https://material.angular.io/) ([GitHub](https://github.com/angular/material2))
UI framework for Angular based on Google's Material design.