import {ReduxBoot} from 'next-react-redux';
import {Client} from './app';


ReduxBoot.run(
  Client,
  'root'
);
