export const f_input = (
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
): string => {
  const target = e.currentTarget || e.target;
  return (target.value || '').replace(/\s+/g, ' ');
};
