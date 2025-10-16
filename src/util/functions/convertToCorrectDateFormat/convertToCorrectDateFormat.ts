export const formatDate = (expiryDateStr: string): string => {
  if (!expiryDateStr) return 'Unknown';

  let expiryDate: Date | null = null;

  // Try parsing formats
  if (expiryDateStr.includes('-')) {
    expiryDate = new Date(expiryDateStr);
  } else if (expiryDateStr.includes('/')) {
    const parts = expiryDateStr.split('/').map(Number);

    // Detect if format is YYYY/MM/DD or DD/MM/YYYY
    if (parts[0] > 31) {
      expiryDate = new Date(parts[0], parts[1] - 1, parts[2]);
    } else {
      expiryDate = new Date(parts[2], parts[1] - 1, parts[0]);
    }
  }

  if (!expiryDate || isNaN(expiryDate.getTime())) return 'Invalid date';

  // Normalize to YYYY/MM/DD
  const year = expiryDate.getFullYear();
  const month = String(expiryDate.getMonth() + 1).padStart(2, '0');
  const day = String(expiryDate.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
};
