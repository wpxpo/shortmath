function multiply(multiplier, multiplicand) {
    let result = multiplier * multiplicand;
    return result;
}

function subtract(rootNumber, subtrahend) {
    let result = rootNumber - subtrahend;
    return result;
}

function round(number, position = null) {
    const functionName = Math['round']
    position = position == null ? 0 : (position >= 0 ? Math.min(position, 299) : Math.max(position, -299))
    if (position) {
        let separate = `${number}e`.split('e')
        const recallValue = functionName(`${separate[0]}e${+separate[1] + position}`)

        separate = `${recallValue}e`.split('e')
        return +`${separate[0]}e${+separate[1] - position}`
    }

    return functionName(number)
}
