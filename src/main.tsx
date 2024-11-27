import './main.css';
import { ThemeOption, ThreadsCardColors } from './themes';
import Container from './components/Container';
import Engagement from './components/Engagement';
import Images from './components/Images';
import Text from './components/Text';
import ThreadsLogo from './components/ThreadsLogo';
import Time from './components/Time';
import UserDetails from './components/UserDetails';

export type ThreadsCardProps = React.HTMLAttributes<HTMLDivElement> & {
  author: {
    username: string;
    image: string;
    verified?: boolean;
  };
  engagement?: {
    replies?: number;
    reposts?: number;
    likes?: number;
  };
  text: string;
  images?: {
    src: string;
  }[];
  time: Date | string;
  permalink?: string;
  clickableProfileLink?: boolean;
  theme?: ThemeOption;
  colors?: ThreadsCardColors;
  gradientBackground?: boolean;
  blurredBackground?: boolean;
  showTime?: boolean;
  showEngagement?: boolean;
  showThreadsLogo?: boolean;
};

const ThreadsCard = ({
  author,
  text,
  time,
  permalink,
  engagement,
  clickableProfileLink,
  showTime = true,
  showEngagement = true,
  showThreadsLogo = true,
  images,
  ...rest
}: ThreadsCardProps) => (
  <Container {...{ ...rest }}>
    <UserDetails {...{ ...author, clickableProfileLink }} />
    {showTime && <Time {...{ time, permalink }} />}
    <Text {...{ text }} />
    {images?.length && <Images {...{ images }} />}
    {showEngagement && <Engagement {...{ ...engagement }} />}
    {showEngagement && showThreadsLogo && <ThreadsLogo {...{ permalink }} />}
  </Container>
);

export default ThreadsCard;
