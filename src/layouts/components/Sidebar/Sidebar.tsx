import React from 'react';

interface Props {
  links?: [
    {
      title: string;
      url: string;
    }
  ];
}

const Sidebar: React.FC<Props> = ({ links }: Props) => {
  return (
    <div>
      {links ? (
        links.map((link) => <a href={link.url}> {link.title}</a>)
      ) : (
        <div>Sidebar</div>
      )}
    </div>
  );
};

export default Sidebar;
