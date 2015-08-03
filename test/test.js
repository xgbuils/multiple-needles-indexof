var chai = require('chai')
var expect = chai.expect
chai.should()

var mnIndexOf = require('../src/index.js')

describe('multi-match-indexof', function () {
    it('str.indexOf(m, os) === multi-match-indexof(str, m, os).index', function () {
        var str = 'aaabccc'
        var m = 'bc'
        var os = 1
        mnIndexOf(str, m, os).index.should.be.equal(str.indexOf(m, os))
    })

    it('with multiple needles returns first occurence of string', function () {
        var str = 'ababccc'
        var m = ['c', 'a']
        var os = 1
        mnIndexOf(str, m, os).should.be.deep.equal({
            index: 2,
            match: 'a'
        })
    })

    it('offset parameter is by default 0', function () {
        var str = 'ababccc'
        var m = ['c', 'a']
        mnIndexOf(str, m).should.be.deep.equal({
            index: 0,
            match: 'a'
        })
    })

    it('if is passed empty array of needles returns undefined', function () {
        var str = 'ababccc'
        var m = []
        expect(mnIndexOf(str, m)).to.equal(undefined)
    })

    it('if needles contains empty string always matches', function () {
        var str = 'ababccc'
        var m = ['']
        var os = 2
        mnIndexOf(str, m, os).should.be.deep.equal({
            index: os,
            match: ''
        })
    })
})