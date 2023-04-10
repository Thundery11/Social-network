export const requiered = (value) => {
  if (value) return undefined;
  return "Field is requiered";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length ${maxLength} symbols`;
  return undefined;
};
