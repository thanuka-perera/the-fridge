import { addMonths } from 'date-fns';

export const getFoodStatus = (expiryDate: Date | null) => {
    if (!expiryDate) {
        return {
            label: 'Unknown',
            labelClasses: 'bg-gray-100 text-gray-500',
            iconColor: 'text-gray-400',
        };
    }

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
