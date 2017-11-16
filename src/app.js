import appDispatcher from './app-dispatcher';

import {
  BrowserRouter
} from 'react-router-dom'

const Client = appDispatcher(BrowserRouter);
const Server = appDispatcher(null);

export {
  Client, Server
};