import { Login } from '../../pages/login';
import Home from '../../pages/home';
import { Tabs, Tab } from '../tabs';
import './main.scss';

export const renderContent = (user, onLogin) => (
  <>
    <div className="content">
      {
        user
          ? <Home user={user} />
          : <Login onLogin={onLogin} />
      }
    </div>
  </>
);

export const Section = ({ children }) => (
  <section>{children && children.filter(child => child.type === 'p')}</section>
);

export const Main = (
  {
    info,
    user,
    loading,
    onLogin
  }
) => (
  <main className="main">
    {
      loading
        ? 'Loding...'
        : (
          <>
            <div className="content">
              {
                user
                  ? <Home user={user} />
                  : <renderContent user={user} onLogin={onLogin} />
              }
              <Tabs selectedIndex={1}>
                <Tab title="Tab 1">
                  <h3>Tab header 1</h3>
                  <p>Some content is here</p>
                </Tab>
                <Tab title="Tab 2">
                  <h3>Tab header 2</h3>
                  <p>Some content is here</p>
                  <time>{new Date().toLocaleDateString()}</time>
                </Tab>
              </Tabs>
              <Section>
                <p>I am p</p>
                <span>I am span</span>
                <p>I am a second p</p>
              </Section>
            </div>
          </>
        )
    }
  </main>
);
