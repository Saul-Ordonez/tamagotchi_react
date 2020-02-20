import React from 'react';
import banner from '../assets/images/banner.png'

function Header() {

  const bannerStyle = {
    position: 'absolute',
    width: '100%',
  }

  return (
    <div>
    <img style={bannerStyle} src={banner} />
    </div>
  );
}

export default Header;
