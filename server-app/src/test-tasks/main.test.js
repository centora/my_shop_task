import chai from 'chai';
const { expect } = chai;
import sinon from 'sinon';
import { days, defaultProduct, users } from './constants';
import {showMessage, getDay, getAdultUsers, getRandomUsers, Product} from './main';
