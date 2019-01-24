import { Loader } from '../loader';
import './main.scss';

export const Main = (
  {
    children
  }
) => (
  <main className="main">
    <>
      <div className="content">
        {children}
      </div>
    </>
  </main>
);
