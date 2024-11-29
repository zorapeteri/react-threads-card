import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';

const xFactorPost = {
  author: {
    username: 'crystellepereira',
    image: 'img/crystellepereira.jpg',
    verified: true,
  },
  text: "I'll still never forgive the X Factor for making us believe that being 25 and over was OLD",
  permalink: 'https://www.threads.net/@crystellepereira/post/C7d9DotssSw',
  engagement: {
    likes: 61,
    replies: 2,
    reposts: 0,
  },
  time: new Date('2024-05-27T11:09:00Z'),
};

const ThreadsCard = (props) => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const ThreadsCard = require('react-threads-card');
        require('react-threads-card/style.css');
        return (
          <span>
            <ThreadsCard
              {...props}
              style={{ width: '100%', ...(props.style ?? {}) }}
            ></ThreadsCard>
          </span>
        );
      }}
    </BrowserOnly>
  );
};

// Add react-live imports you need here
const ReactLiveScope: unknown = {
  React,
  xFactorPost,
  ThreadsCard,
  ...React,
};

export default ReactLiveScope;
