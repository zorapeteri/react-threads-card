const className = (...arr: (string | null | undefined | boolean)[]) => ({
  className: arr.filter(Boolean).join(' '),
});

export default className;
