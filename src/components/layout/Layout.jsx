import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main className="dashboard-container">
        {children}
      </main>
    </div>
  );
};

export default Layout;
