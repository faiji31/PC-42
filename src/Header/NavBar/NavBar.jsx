import React from 'react';

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Features", path: "/features" },
  { id: 3, name: "Pricing", path: "/pricing" },
  { id: 4, name: "AI Concierge", path: "/ai-assistant" },
  { id: 5, name: "Contact Us", path: "/contact" }
];


const Navbar = () => {
      return (
            <nav>
                  <ul className='flex'>
                   {
                        navigationData.map(route=><li className='mr-10'><a href="">{route.name}</a></li>)
                   }
                  </ul>
            </nav>
      );
};

export default Navbar;