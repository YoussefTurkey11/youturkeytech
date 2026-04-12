export const generateShortId = (id: string, fullName: string) => {
  // 🟢 آخر 4 حروف من الـ id
  const last4 = id.slice(-4);

  // 🟢 ناخد أول حرف من كل كلمة في الاسم
  const initials = fullName
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((name) => name[0].toUpperCase())
    .slice(0, 2) // أول حرفين بس (لو الاسم طويل)
    .join("");

  return `${initials}${last4}`;
};
