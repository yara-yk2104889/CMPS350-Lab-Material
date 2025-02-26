import { expect } from "chai";

describe("Testing the calculator functionalities", () => {
    it("expect add 2 and 3 to equal 5 ", () => {
        expect(2 + 3).to.equal(5)
    })
    it("expect subtract 3 from 2 to equal -1 ", () => {
        expect(2 - 3).to.equal(-1)
    })
    it("expect multiply 2 by 3 to equal 6 ", () => {
        expect(2 * 3).to.equal(6)
    })
    it("expect divide 6 by 3 to equal 2 ", () => {
        expect(6 / 3).to.equal(2)
    })

})



