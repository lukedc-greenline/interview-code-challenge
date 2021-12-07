import { convert } from '../src/convert'
import { expect } from 'chai'

describe('convert tests', () => {
    it('1 should return I', () => {
        const check = convert(1)
        expect(check).to.equal('I')
    })
})