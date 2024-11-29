import React from 'react';
import ReactDOM from 'react-dom/client';
import ThreadsCard from './main';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <ThreadsCard
      style={{ width: '100%', maxWidth: '500px', margin: '100px auto' }}
      author={{
        username: 'samreich',
        image:
          'https://zorapeteri.github.io/react-threads-card/img/samreich.jpg',
        verified: true,
      }}
      text="that's a wrap on game changer season 7"
      images={[
        {
          src: 'https://zorapeteri.github.io/react-threads-card/img/season7.jpg',
        },
        {
          src: 'https://zorapeteri.github.io/react-threads-card/img/season7.jpg',
        },
        {
          src: 'https://zorapeteri.github.io/react-threads-card/img/season7.jpg',
        },
      ]}
      time={new Date('2024-11-14T17:01:00Z')}
    />
  </React.StrictMode>
);
