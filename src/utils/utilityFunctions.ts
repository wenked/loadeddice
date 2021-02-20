


export const convertNumber = (num:Number) => {
    return `${((Number(num) * 100).toFixed(1))}%`
}


export const getColor = (colorClass:Record<"root" | "medium" | "table" | "low" | "high", string>
,odd:Number) => {

    if(odd <= 0.05) {
        return colorClass.low
    }
    if(odd > 0.05 && odd <= 0.1) {
        return colorClass.medium
    }

    return colorClass.high
}