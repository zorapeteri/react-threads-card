import className from '../../utils/className';
import globalClassName from '../../utils/globalClassName';
import formatEngagement from '../../utils/formatEngagement';
import { ThreadsCardProps } from '../../main';
import css from './Engagement.module.css';
import EngagementIcons from './EngagementIcons';

type EngagementProps = Exclude<ThreadsCardProps['engagement'], undefined>;

const singular = {
  replies: 'reply',
  reposts: 'repost',
  likes: 'like',
} as const;

function Engagement({ replies = 0, reposts = 0, likes = 0 }: EngagementProps) {
  const amounts = { replies, reposts, likes };

  return (
    <div
      {...className(css.engagement, globalClassName('engagement-container'))}
    >
      {(['likes', 'reposts', 'replies'] as const).map((item) => (
        <span
          key={item}
          role="img"
          aria-label={`${amounts[item]} ${
            amounts[item] === 1 ? singular[item] : item
          }`}
          {...className(globalClassName(item), css.engagementItem)}
        >
          {EngagementIcons[item]()}
          <span {...className(css.engagementAmount)}>
            {formatEngagement(amounts[item])}
          </span>
        </span>
      ))}
    </div>
  );
}

export default Engagement;
