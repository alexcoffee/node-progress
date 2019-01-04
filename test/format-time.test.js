const formatEta = require('../lib/format-eta')

test('NaN', () => {
  let actual = formatEta(NaN)
  expect(actual).toEqual('?m ?s')
})

test('Infinity', () => {
  let actual = formatEta(Infinity)
  expect(actual).toEqual('?m ?s')
})

test('milliseconds', () => {
  let actual = formatEta(200)
  expect(actual).toEqual('0.2s')
})

test('seconds', () => {
  let actual = formatEta(3200)
  expect(actual).toEqual('3.2s')
})

test('exact hour', () => {
  let actual = formatEta(36000000)
  expect(actual).toEqual('10h 0.0m')
})

test('minutes and seconds', () => {
  let actual = formatEta(1003200)
  expect(actual).toEqual('16m 43.2s')
})

test('hours and minutes', () => {
  let actual = formatEta(37003200)
  expect(actual).toEqual('10h 16.7m')
})

test('float', () => {
  let actual = formatEta(3215.123456789)
  expect(actual).toEqual('3.2s')
})

test('float minutes and seconds', () => {
  let actual = formatEta(1003200.1221315649874894)
  expect(actual).toEqual('16m 43.2s')
})
