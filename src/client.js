import {BrowserRouter,} from 'react-router-dom'
import {ReduxBoot} from 'next-react-redux';
import {Client} from './app';

ReduxBoot.run(
  Client,
  'root'
);
