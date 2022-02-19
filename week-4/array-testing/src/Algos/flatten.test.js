describe("Flatten Array Tests", () => {
    it("should flatten an array of arrays.", () => {
        const nestedArray = [1, [2, 3], [[4], 5]]
        const flatArray = [1, 2, 3, 4, 5]
        expect(flatten(nestedArray)).toEqual(flatArray)
    })
})
