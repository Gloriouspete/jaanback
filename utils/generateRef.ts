export default function generateTransactionRef() {
  const now = new Date();

  const pad = (n:number) => n.toString().padStart(2, '0');

  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1); // Months are 0-based
  const day = pad(now.getDate());
  const hour = pad(now.getHours());
  const minute = pad(now.getMinutes());
  const second = pad(now.getSeconds());

  const timePart = `${year}${month}${day}${hour}${minute}${second}`;
  const randomPart = Math.floor(1000 + Math.random() * 9000); // 4 random digits

  return `${timePart}${randomPart}`;
}

// Example usage
console.log(generateTransactionRef()); // e.g. 202506071745329283
