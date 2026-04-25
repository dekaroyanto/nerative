// utils/getInitials.js
export function getInitials(name) {
  if (!name || name === "") return "AD";
  const names = name.trim().split(" ");
  if (names.length === 1) {
    return names[0].substring(0, 2).toUpperCase();
  }
  return (names[0][0] + names[names.length - 1][0]).toUpperCase();
}
