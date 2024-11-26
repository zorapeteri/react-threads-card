import React from 'react';
import { ThreadsCardProps } from 'index';
import ProfilePicture from '../ProfilePicture';
import Username from '../Username';
import css from './UserDetails.module.css';

type UserDetailsProps = ThreadsCardProps['author'] &
  Pick<ThreadsCardProps, 'clickableProfileLink'>;

const UserDetails = ({
  username,
  image,
  verified,
  clickableProfileLink,
}: UserDetailsProps) => {
  const Tag = clickableProfileLink ? 'a' : 'div';

  return (
    <Tag
      {...(clickableProfileLink && {
        href: `https://threads.net/@${username}`,
        target: '_blank',
        rel: 'noreferrer',
      })}
      className={css.userDetails}
      aria-label={[
        `${`Post by Threads user ${name}`} (@${username})`,
        clickableProfileLink &&
          `Click this link to open their profile on threads.net`,
      ]
        .filter(Boolean)
        .join('. ')}
    >
      <ProfilePicture {...{ image, clickableProfileLink }} />
      <Username {...{ username, verified, clickableProfileLink }} />
    </Tag>
  );
};

export default UserDetails;
