// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// true tests for isPhoneNumber

test('tests if number is phone number', () => {
  expect(isPhoneNumber('858-349-0804')).toBe(true);
});

test('tests if number is phone number', () => {
  expect(isPhoneNumber('(858) 349-0804')).toBe(true);
});

// false tests for isPhoneNumber

test('tests if number is not phone number', () => {
  expect(isPhoneNumber('8583490804')).toBe(false);
});

test('tests if number is not phone number', () => {
  expect(isPhoneNumber('8583804')).toBe(false);
});

// true tests for isEmail

test('tests if string is email', () => {
  expect(isEmail('sdevineni@ucsd.edu')).toBe(true);
});

test('tests if string is email', () => {
  expect(isEmail('cse110@yahoo.com')).toBe(true);
});

// false tests for isEmail

test('tests if string is not email', () => {
  expect(isEmail('sanjithdevinenigmail')).toBe(false);
});

test('tests if string is not email', () => {
  expect(isEmail('cse 110 @ powell')).toBe(false);
});

// true tests for isStrongPassword

test('tests if string is a strong password', () => {
  expect(isStrongPassword('smenati4_')).toBe(true);
});

test('tests if string is a strong password', () => {
  expect(isStrongPassword('hellverse4')).toBe(true);
});

// false tests for isStrongPassword

test('tests if string is not a strong password', () => {
  expect(isStrongPassword('4am')).toBe(false);
});

test('tests if string is not a strong password', () => {
  expect(isStrongPassword('venjknvjwnjckjsck w')).toBe(false);
});

// true tests for isDate

test('tests if string is a date', () => {
  expect(isDate('1/2/2024')).toBe(true);
});

test('tests if string is a date', () => {
  expect(isDate('04/05/2023')).toBe(true);
});

// false tests for isDate

test('tests if string is not a date', () => {
  expect(isDate('1/2/24')).toBe(false);
});

test('tests if string is not a date', () => {
  expect(isDate('04-05/2023')).toBe(false);
});

// true tests for isHexColor

test('tests if string is valid hex code', () => {
  expect(isHexColor('256')).toBe(true);
});

test('tests if string is valid hex code', () => {
  expect(isHexColor('124365')).toBe(true);
});

// false tests for isHexColor

test('tests if string is not a valid hex code', () => {
  expect(isHexColor('1234')).toBe(false);
});

test('tests if string is not a valid hex code', () => {
  expect(isHexColor('12')).toBe(false);
});