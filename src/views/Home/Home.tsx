import React, { ReactElement } from 'react';

interface Props {
  title: string;
}

function Home({ title }: Props): ReactElement {
  return <div>{title}</div>;
}

export default Home;
