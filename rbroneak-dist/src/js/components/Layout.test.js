const rewire = require("rewire")
const Layout = rewire("./Layout")
const updateBgImage = Layout.__get__("updateBgImage")
const loaded = Layout.__get__("loaded")
// @ponicode
describe("updateBgImage", () => {
    test("0", () => {
        let callFunction = () => {
            updateBgImage()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loaded", () => {
    test("0", () => {
        let callFunction = () => {
            loaded()
        }
    
        expect(callFunction).not.toThrow()
    })
})
