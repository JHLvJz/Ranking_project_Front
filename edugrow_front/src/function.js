export function calcTime(time) {
  const hour = Math.round(time / 3600);
  const minute = Math.round((time % 3600) / 60);
  const second = Math.round(time % 60);
  return [hour, minute, second];
}
