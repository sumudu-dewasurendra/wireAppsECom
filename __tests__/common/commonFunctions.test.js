import { totalWithCurrency } from '../../src/common/commonFunctions'
import { basketItems } from '../../testData/sampleData'

describe('Common function tests', () => {
    it('should return total amount of basket list', () => {
        expect(totalWithCurrency(basketItems)).toEqual('90 GBP')
    })
})