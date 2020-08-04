import React from 'react';
import { Route } from 'react-router-dom';

interface Props {
  component: any;
  layout: any;
  path: string;
  exact?: any;
}

const RouteWithLayout: React.FC<Props> = ({
  layout: Layout,
  component: Component,
}: Props) => {
  return (
    <Route
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
