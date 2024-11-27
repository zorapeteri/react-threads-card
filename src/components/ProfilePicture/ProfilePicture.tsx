import { ThreadsCardProps } from '../../main';
import className from '../../utils/className';
import globalClassName from '../../utils/globalClassName';
import css from './ProfilePicture.module.css';

type ProfilePictureProps = Pick<ThreadsCardProps['author'], 'image'> &
  Pick<ThreadsCardProps, 'clickableProfileLink'>;

const ProfilePicture = ({
  image,
  clickableProfileLink,
}: ProfilePictureProps) => (
  <div
    {...className(
      globalClassName('author-image'),
      css.profilePictureContainer,
      clickableProfileLink && css.clickable
    )}
  >
    <div
      style={{ backgroundImage: `url(${image})` }}
      aria-hidden
      {...className(css.profilePicture)}
    />
    <div aria-hidden {...className(css.fallbackPicture)} />
  </div>
);

export default ProfilePicture;
