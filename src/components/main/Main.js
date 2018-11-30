import React from 'react';
import { Aside } from '../aside';
import './main.scss';

export const Main = () => (
  <>
    <main className="main">
      <Aside></Aside>
      <div className="content">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi assumenda at culpa cum cupiditate earum est ipsa minima molestias neque nisi officia, officiis omnis pariatur porro sint sit tenetur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi assumenda at culpa cum cupiditate earum est ipsa minima molestias neque nisi officia, officiis omnis pariatur porro sint sit tenetur.</p>
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi assumenda at culpa cum cupiditate earum est ipsa minima molestias neque nisi officia, officiis omnis pariatur porro sint sit tenetur.</p>
      </div>
    </main>
  </>

);
