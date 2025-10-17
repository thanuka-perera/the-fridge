import { addMonths } from 'date-fns';

export const getFoodStatus = (expiryDateStr: string) => {
    if (!expiryDateStr) {
        return {
            label: 'Unknown',
            labelClasses: 'bg-gray-100 text-gray-500',
            iconColor: 'text-gray-400',
        };
    }

    const normalizedStr = expiryDateStr.replaceAll('/', '-');

    let formattedStr = normalizedStr;
    const parts = normalizedStr.split('-').map(Number);

    if (parts[0] <= 31 && parts[2] > 31) {
        const [day, month, year] = parts;
        formattedStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    } else {
        const [year, month, day] = parts;
        formattedStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }

    const expiryDate = new Date(formattedStr);
    if (isNaN(expiryDate.getTime())) {
        return {
            label: 'Invalid date',
            labelClasses: 'bg-gray-200 text-gray-600',
            iconColor: 'text-gray-500',
        };
    }

    expiryDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const oneMonthFromNow = addMonths(today, 1);

    if (expiryDate < today) {
        return {
            label: 'Expired',
            labelClasses: 'bg-[#FFEBEB] text-[#752B2B]',
            iconColor: 'text-red-500',
        };
    }

    if (expiryDate <= oneMonthFromNow) {
        return {
            label: 'Expiring soon',
            labelClasses: 'bg-[#FFFDCC] text-[#754311]',
            iconColor: 'text-yellow-500',
        };
    }

    return {
        label: 'Healthy',
        labelClasses: 'bg-[#DBFFE6] text-[#23553E]',
        iconColor: 'text-gray-600',
    };
};
