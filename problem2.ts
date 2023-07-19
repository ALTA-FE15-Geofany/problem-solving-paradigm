function dragonlowater(dragonHeads: number[], knightHeights: number[]): number | string {
    if (Math.max(...dragonHeads) > Math.max(...knightHeights)) {
        return "knight fall"
    }

    dragonHeads.sort((a, b) => a - b)
    knightHeights.sort((a, b) => a - b)

    let totalHeight = 0
    let knightIndex = 0

    for (let i = 0; i < dragonHeads.length; i++) {
        while (knightIndex < knightHeights.length && knightHeights[knightIndex] < dragonHeads[i]) {
            knightIndex++
        }

        if (knightIndex === knightHeights.length) {
            return "knight fall"
        }

        totalHeight += knightHeights[knightIndex]
        knightIndex++
    }

    return totalHeight
}

console.log(dragonlowater([5, 4], [7, 8, 4]))
console.log(dragonlowater([5, 10], [5]))
console.log(dragonlowater([7, 2], [4, 3, 1, 2]))
console.log(dragonlowater([7, 2], [4, 1, 8, 5]))
