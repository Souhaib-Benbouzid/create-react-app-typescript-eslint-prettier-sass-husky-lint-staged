import React from 'react';
import { Footer, Sidebar, Topbar } from './components';

interface Props {
  test: string;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <main> {children}</main>
      <Footer />
    </div>
  );
};

export default Main;
