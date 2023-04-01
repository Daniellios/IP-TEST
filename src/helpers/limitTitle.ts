export const titleLimit = (title: string) => {
  let croppedTitle = "";
  const titleWords = title.split(" ");

  for (let i = 0; i < 3; i++) {
    croppedTitle = `${croppedTitle}  ${titleWords[i]}`;
  }

  return croppedTitle;
};
