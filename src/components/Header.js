import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu" style={{ marginBottom: '30px' }} >
      <Link href="/" className="item">Accordion</Link>
      <Link href="/dropdown" className="item">Dropdown</Link>
      <Link href="/comment" className="item">Comment</Link>
      <Link href="/season" className="item">Season</Link>
    </div>
  );
};

export default Header;
