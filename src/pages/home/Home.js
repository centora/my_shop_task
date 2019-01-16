import './home.scss';

export const Home = (
  {
    user,
    history,
    info
  }
) => (
  <article className="invitation">
    {
      user ? (
        <>
          <h1 className="main-title">Hello {user.firstName}</h1>
          {
            info && (
              <div className="info">
                <p>
                  You have <strong>{info.categories}</strong> categories &nbsp;
                  ({info.publishedCategories} published categories)
                </p>
                <p>You have <strong>{info.products}</strong> products</p>
                <button type="button" onClick={() => history.push('/categories')}>Go To Categories</button>
              </div>
            )
          }
        </>
      ) : (
        <>
          <h1 className="main-title">Welcome to the Toy market</h1>
          <p>We are pleased to announce the launch of our brand new website!</p>
          <p>From the 1st December our company starts to deliver online order.</p>
          <p>First hundred customers gets a 10% discount!</p>
        </>
      )
    }
  </article>
);
