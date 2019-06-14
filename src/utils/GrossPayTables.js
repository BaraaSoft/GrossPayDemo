
export const withholdingTable = () => {

    return [
        {
            payrollPeriod: "Weekly",
            withholdAllowance: 80.80,
        },
        {
            payrollPeriod: "Monthly",
            withholdAllowance: 350.00,
        }
    ]

}


export const singleWeeklyIncomeTaxTable = (income) => {

    const table = [
        {
            amount: 73,
            plusValue: 0.00,
            percentage: 0.10,
            limit: 260
        },
        {
            amount: 260,
            plusValue: 18.70,
            percentage: 0.12,
            limit: 832
        },
        {
            amount: 832,
            plusValue: 87.34,
            percentage: 0.22,
            limit: 1692
        },
        {
            amount: 1692,
            plusValue: 276.54,
            percentage: 0.24,
            limit: 3164
        },
        {
            amount: 3164,
            plusValue: 629.82,
            percentage: 0.32,
            limit: 3998
        },
        {
            amount: 3998,
            plusValue: 896.7,
            percentage: 0.35,
            limit: 9887
        }
    ];

    if (income >= 9887) return {
        amount: 9887,
        plusValue: 2957.85,
        percentage: 0.37
    }

    const result = table.filter(item => (income >= item.amount) && (income < item.limit))

    return result;

}


export const marriedWeeklyIncomeTaxTable = (income) => {
    const table = [
        {
            amount: 227,
            plusValue: 0.00,
            percentage: 0.10,
            limit: 600
        },
        {
            amount: 600,
            plusValue: 37.30,
            percentage: 0.12,
            limit: 1745
        },
        {
            amount: 1745,
            plusValue: 174.70,
            percentage: 0.22,
            limit: 3465
        },
        {
            amount: 3465,
            plusValue: 553.10,
            percentage: 0.24,
            limit: 6409
        },
        {
            amount: 6409,
            plusValue: 1259.66,
            percentage: 0.32,
            limit: 8077
        },
        {
            amount: 8077,
            plusValue: 1793.42,
            percentage: 0.35,
            limit: 12003
        },
    ]

    if (income >= 12003) return {
        amount: 9887,
        plusValue: 3167.52,
        percentage: 0.37,
        limit: null
    }

    const result = table.filter(item => (income >= item.amount) && (income < item.limit))

    return result;
}


export const singleMonthlyIncomeTaxTable = (income) => {
    const table = [
        {
            amount: 317,
            plusValue: 0.00,
            percentage: 0.10,
            limit: 1125
        },
        {
            amount: 1125,
            plusValue: 80.80,
            percentage: 0.12,
            limit: 3606
        },
        {
            amount: 3606,
            plusValue: 378.52,
            percentage: 0.22,
            limit: 7333
        },
        {
            amount: 7333,
            plusValue: 1198.46,
            percentage: 0.24,
            limit: 13710
        },
        {
            amount: 13710,
            plusValue: 2728.94,
            percentage: 0.32,
            limit: 17325
        },
        {
            amount: 17325,
            plusValue: 3885.74,
            percentage: 0.35,
            limit: 42842
        }

    ]

    if (income >= 42842) return {
        amount: 42842,
        plusValue: 12816.69,
        percentage: 0.37,
        limit: null
    }

    const result = table.filter(item => (income >= item.amount) && (income < item.limit))

    return result;
}

export const marriedMonthlyIncomeTaxTable = (income) => {
    const table = [
        {
            amount: 983,
            plusValue: 0.00,
            percentage: 0.10,
            limit: 2600
        },
        {
            amount: 2600,
            plusValue: 161.70,
            percentage: 0.12,
            limit: 7563
        },
        {
            amount: 7563,
            plusValue: 757.26,
            percentage: 0.22,
            limit: 15017
        },
        {
            amount: 15017,
            plusValue: 2397.14,
            percentage: 0.24,
            limit: 27771
        },
        {
            amount: 27771,
            plusValue: 5458.10,
            percentage: 0.32,
            limit: 35000
        },
        {
            amount: 35000,
            plusValue: 7771.38,
            percentage: 0.35,
            limit: 52013
        }
    ];

    if (income >= 52013) return {
        amount: 52013,
        plusValue: 13725.93,
        percentage: 0.37,
        limit: null
    }

    const result = table.filter(item => (income >= item.amount) && (income < item.limit))

    return result;

}

