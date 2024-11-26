import ThreadsCard, { ThreadsCardProps } from '.';

export default {
  title: 'Components/ThreadsCard',
  component: ThreadsCard,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: {
        type: 'select',
      },
    },
  },
};

const buildProps = (args: any): ThreadsCardProps => {
  const {
    text,
    images,
    time,
    permalink,
    fitInsideContainer,
    replies,
    likes,
    reposts,
    theme,
    clickableProfileLink,
    showTime,
    gradientBackground,
    blurredBackground,
    username,
    image,
    showEngagement,
    verified,
  } = args;

  return {
    author: {
      username,
      image,
      verified,
    },
    text,
    images,
    time,
    permalink,
    fitInsideContainer,
    showTime,
    clickableProfileLink,
    gradientBackground,
    blurredBackground,
    theme,
    showEngagement,
    ...(replies || likes || reposts
      ? { engagement: { replies, likes, reposts } }
      : {}),
  };
};

const baseArgs = {
  username: 'hankgreen',
  image: require('./assets/hank.jpeg'),
  text: "What an achievement vaccines are. What a monument to our love for each other it is to stare straight into the face of something as horrific and unstoppable as smallpox or measles or polio or cervical cancer and say “You know what, it doesn't have to be like this.”\n\nHUMANS!",
  time: new Date('2024-11-15T01:59:00.000Z'),
  fitInsideContainer: true,
  clickableProfileLink: false,
  showTime: true,
  permalink: '',
  likes: 12,
  reposts: 34,
  replies: 56,
  theme: 'light',
  gradientBackground: false,
  blurredBackground: false,
  showEngagement: true,
  verified: false,
};

const make = (extraArgs: any) => {
  return {
    args: buildProps({ ...baseArgs, ...extraArgs }),
  };
};

export const Default = make({});

export const Dark = make({ theme: 'dark' });

export const WithPermalink = make({
  permalink: 'https://www.threads.net/@hankgreen/post/DCYD3SLo4DM',
});

export const WithoutTime = make({ showTime: false });

export const WithClickableProfileLink = make({ clickableProfileLink: true });

export const WithoutProfilePicture = make({
  image: undefined,
});

export const Verified = make({ verified: true });

export const WithoutEngagement = make({
  showEngagement: false,
});

export const WithHighlightedText = make({
  text: baseArgs.text + ' @username #hashtag https://link.com',
});

export const WithSingleImage = make({
  images: [
    {
      src: 'https://images.unsplash.com/photo-1670884305917-910eb2704c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    },
  ],
});

export const WithMultipleImages = make({
  images: [
    {
      src: 'https://images.unsplash.com/photo-1670884305917-910eb2704c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1669303812553-c4b34cb21ff5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1604276920302-0bb781ed727c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE4MHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    },
  ],
});

export const WithBigEngagement = make({
  replies: 12000,
  reposts: 3400000,
  likes: 56000000,
});

export const WithGradientBackground = make({ gradientBackground: true });

export const WithBlurredBackground = make({ blurredBackground: true });
