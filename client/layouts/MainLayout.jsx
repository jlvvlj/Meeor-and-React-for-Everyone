import React from 'react';

export const MainLayout = ({content}) => (
<div className="main-layout">
  <header>
    <h2>My Resolutions</h2>
    <nav>
      <a href="/">Resolutions</a>
      
    </nav>
  </header>

  <main>
    {content}
   </main>
 </div>
)