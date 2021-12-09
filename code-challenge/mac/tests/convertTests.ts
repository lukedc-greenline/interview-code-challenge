import { convert } from '../src/convert'
import { expect } from 'chai'

describe('convert tests', () => {
    it('I should return 1', () => {
        const check = convert('I')
        expect(check).to.equal(1)
    })

    it('II should return 2', () => {
        const check = convert('II')
        expect(check).to.equal(2)
    })

    it('III should return 3', () => {
        const check = convert('III')
        expect(check).to.equal(3)
    })

    it('IV should return 4', () => {
        const check = convert('IV')
        expect(check).to.equal(4)
    })

    it('V should return 5', () => {
        const check = convert('V')
        expect(check).to.equal(5)
    })

    it('VI should return 6', () => {
        const check = convert('VI')
        expect(check).to.equal(6)
    })

    it('IX should return 9', () => {
        const check = convert('IX')
        expect(check).to.equal(9)
    })

    it('X should return 10', () => {
        const check = convert('X')
        expect(check).to.equal(10)
    })

    it('XI should return 11', () => {
        const check = convert('XI')
        expect(check).to.equal(11)
    })

    it('XX should return 20', () => {
        const check = convert('XX')
        expect(check).to.equal(20)
    })

    it('L should return 50', () => {
        const check = convert('L')
        expect(check).to.equal(50)
    })

    it('LI should return 51', () => {
        const check = convert('LI')
        expect(check).to.equal(51)
    })

    it('C should return 100', () => {
        const check = convert('C')
        expect(check).to.equal(100)
    })

    it('CI should return 101', () => {
        const check = convert('CI')
        expect(check).to.equal(101)
    })

    it('CC should return 200', () => {
        const check = convert('CC')
        expect(check).to.equal(200)
    })

    it('M should return 1000', () => {
        const check = convert('M')
        expect(check).to.equal(1000)
    })

    it('XVII should return 17', () => {
        const check = convert('XVII')
        expect(check).to.equal(17)
    })

    it('LXVIII should return 68', () => {
        const check = convert('LXVIII')
        expect(check).to.equal(68)
    })

    it('LXXX should return 80', () => {
        const check = convert('LXXX')
        expect(check).to.equal(80)
    })

    it('LXXXVIII should return 88', () => {
        const check = convert('LXXXVIII')
        expect(check).to.equal(88)
    })

    it('XCII should return 92', () => {
        const check = convert('XCII')
        expect(check).to.equal(92)
    })

    it('MMMCMXCIX should return 3999', () => {
        const check = convert('MMMCMXCIX')
        expect(check).to.equal(3999)
    })
})