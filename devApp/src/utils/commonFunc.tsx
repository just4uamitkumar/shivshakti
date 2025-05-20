export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export const navigateUrl = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
