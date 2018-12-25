import { Login } from '../../pages/login';
import { Home } from '../../pages/home';
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
            </div>
          </>
        )
    }
  </main>
);
