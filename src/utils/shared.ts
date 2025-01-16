export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getGreeting = ({
  withEmoji = false,
  concact = '',
}: { withEmoji?: boolean; concact?: string } = {}) => {
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) return 'Bom dia' + concact + (withEmoji ? ' 🌤️' : '');
  if (hours >= 12 && hours <= 17)
    return 'Boa tarde' + concact + (withEmoji ? ' ☀️' : '');
  return 'Boa noite' + concact + (withEmoji ? ' 🌙' : '');
};
