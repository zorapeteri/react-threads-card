function formatPostTime(date: Date) {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 2) {
    return 'just now';
  }

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return `${interval}y`;
  }
  interval = Math.floor(seconds / 604800);
  if (interval > 1) {
    return `${interval}w`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval}d`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval}h`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval}m`;
  }
  return `${Math.floor(seconds)}s`;
}

export default formatPostTime;
