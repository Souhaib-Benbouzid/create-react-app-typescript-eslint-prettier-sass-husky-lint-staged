import React from 'react';

interface Props {
  links?: [
    {
      title: string;
      url: string;
    }
  ];
}

const Topbar: React.FC<Props> = ({ links }: Props) => {
  return (
    <div>
      {links ? (
        links.map((link) => <a href={link.url}> {link.title}</a>)
      ) : (
        <div>Topbar</div>
      )}
    </div>
  );
};

export default Topbar;
