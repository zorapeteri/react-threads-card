import { ThreadsCardProps } from '../../main';
import formatPostTime from '../../utils/formatPostTime';
import globalClassName from '../../utils/globalClassName';
import css from './Time.module.css';

type TimeProps = Pick<ThreadsCardProps, 'time' | 'permalink'>;

function Time({ time, permalink }: TimeProps) {
  const formattedTime = time instanceof Date ? formatPostTime(time) : time;

  return (
    <p className={css.time}>
      {permalink ? (
        <a
          href={permalink}
          target="_blank"
          rel="noreferrer"
          className={globalClassName('time')}
          aria-label={[
            `Posted at ${time instanceof Date ? formatPostTime(time) : time}`,
            permalink && 'Click this link to view this post on threads.net',
          ]
            .filter(Boolean)
            .join('. ')}
        >
          {formattedTime}
        </a>
      ) : (
        <span className={globalClassName('time')}>{formattedTime}</span>
      )}
    </p>
  );
}

export default Time;
