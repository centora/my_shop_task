import { Login } from '../../pages/login';
import Home from '../../pages/home';
import { Tabs } from '../tabs';
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
              <Tabs tabs={[
                { id: 0, title: 'Tab 1', content: 'Some text is here' },
                { id: 1, title: 'Tab 2', content: 'Another content' },
                { id: 2, title: 'Tab 1', content: 'Third text' }
              ]}
              />
            </div>
          </>
        )
    }
  </main>
);
