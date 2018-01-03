'use strict'

/* global describe, it, expect */
/* jshint maxlen: 999, node: true */

const format = require('../format')

describe('format', () => {
  const readMessages = format('{0}, you have {1} unread message{2}')

  it('interpolates positional arguments', () =>
    expect(
      readMessages(['Holly', 2, 's'])
    ).toBe('Holly, you have 2 unread messages')
  )

  it('strips unmatched placeholders', () =>
    expect(
      readMessages(['Steve', 1])
    ).toBe('Steve, you have 1 unread message')
  )

  it('replaces all occurrences of a placeholder', () =>
    expect(
      format('the meaning of life is {0} ({1} x {2} is also {0})', [42, 6, 7])
    ).toBe('the meaning of life is 42 (6 x 7 is also 42)')
  )

  it('supports property access via dot notation', () => {
    const versus = format('{0.first} {0.last} vs. {1.first} {1.last}')
    const bobby = { first: 'Bobby', last: 'Fischer' }
    const garry = { first: 'Garry', last: 'Kasparov' }
    expect(
      versus([bobby, garry])
    ).toBe('Bobby Fischer vs. Garry Kasparov')
  })

  it('supports property access via object', () => {
    const template = format('I am {age} years old. The name is {lastname}. {firstname} {lastname}.')
    const james = { firstname: 'James', lastname: 'Bond', age: 1024 }
    expect(
      template(james)
    ).toBe('I am 1024 years old. The name is Bond. James Bond.')
  })

  it("passes applicable tests from Python's test suite", () => {
    expect(format('{0}', ['abc'])).toBe('abc')
    expect(format('X{0}', ['abc'])).toBe('Xabc')
    expect(format('{0}X', ['abc'])).toBe('abcX')
    expect(format('X{0}Y', ['abc'])).toBe('XabcY')
    expect(format('{1}', [1, 'abc'])).toBe('abc')
    expect(format('X{1}', [1, 'abc'])).toBe('Xabc')
    expect(format('{1}X', [1, 'abc'])).toBe('abcX')
    expect(format('X{1}Y', [1, 'abc'])).toBe('XabcY')
    expect(format('{0}', [-15])).toBe('-15')
    expect(format('{0}{1}', [-15, 'abc'])).toBe('-15abc')
    expect(format('{0}X{1}', [-15, 'abc'])).toBe('-15Xabc')
  })
})
