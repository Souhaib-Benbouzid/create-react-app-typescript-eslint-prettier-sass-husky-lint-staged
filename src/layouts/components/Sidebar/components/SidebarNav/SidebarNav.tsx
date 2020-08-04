import React from 'react';

interface Props {
  sidenav: string[];
}

const SidebarNav: React.FC<Props> = ({ sidenav }: Props) => {
  return <div>{...sidenav}</div>;
};

export default SidebarNav;
