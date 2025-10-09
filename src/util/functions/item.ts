export const getItemStatus = (expiryDateStr: string) => {

    if (!expiryDateStr) {
        return {
            label: "Unknown",
            labelClasses: "bg-gray-100 text-gray-500",
            iconColor: "text-gray-400",
        };
    }

    let expiryDate: Date | null = null;

    if (expiryDateStr.includes("-")) {

        expiryDate = new Date(expiryDateStr);
    } else if (expiryDateStr.includes("/")) {

        const parts = expiryDateStr.split("/").map(Number);
        if (parts[0] > 31) {

            expiryDate = new Date(parts[0], parts[1] - 1, parts[2]);
        } else {

            expiryDate = new Date(parts[2], parts[1] - 1, parts[0]);
        }
    }

    if (!expiryDate || isNaN(expiryDate.getTime())) {
        return {
            label: "Invalid date",
            labelClasses: "bg-gray-200 text-gray-600",
            iconColor: "text-gray-500",
        };
    }

    expiryDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const oneMonthFromNow = new Date(today);
    oneMonthFromNow.setDate(today.getDate() + 30);

    if (expiryDate < today) {
        return {
            label: 'Expired',
            labelClasses: 'bg-red-100 text-red-700',
            iconColor: 'text-red-500'
        };
    }
    if (expiryDate < oneMonthFromNow) {
        return {
            label: 'Expiring soon',
            labelClasses: 'bg-yellow-100 text-yellow-700',
            iconColor: 'text-yellow-500'
        };
    }
    return {
        label: 'Healthy',
        labelClasses: 'bg-green-100 text-green-700',
        iconColor: 'text-gray-600'
    };
};