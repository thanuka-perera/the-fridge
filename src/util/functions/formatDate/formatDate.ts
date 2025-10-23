export const parseDateString = (expiryDateStr: string): Date | null => {

  if (!expiryDateStr) return null;

  let year: number, month: number, day: number;

  if (expiryDateStr.includes('/')) {
    const [y, m, d] = expiryDateStr.split('/').map(Number);
    year = y; month = m; day = d;
  } else if (expiryDateStr.includes('-')) {
    const [y, m, d] = expiryDateStr.split('-').map(Number);
    year = y; month = m; day = d;
  } else {
    return null;
  }

  const date = new Date(year, month - 1, day);
  
  return date;
};

export const dateToInputString = (dateIn: Date) => {
        const date = new Date(dateIn);
        if (isNaN(date.getTime())) return '';
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    };

export const inputStringToDisplayString = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}/${m}/${d}`;
  };
