import './main.scss';

export const Main = (
  {
    loading,
    children
  }
) => (
  <main className="main">
    {
      loading
        ? 'Loding...'
        : (
          <>
            <div className="content">
              {children}
            </div>
          </>
        )
    }
  </main>
);
