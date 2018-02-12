'use strict';

const Code = require('code');
const Lab = require('lab');
const snake_case = require('../');


const lab = exports.lab = Lab.script();
const it = lab.it;
const expect = Code.expect;

it('converts CamelCase strings', () => {
  expect(snake_case('pickleRick')).to.equal('pickle_rick');
});

it('converts UPPERLower strings', () => {
  expect(snake_case('PICKLERick')).to.equal('pickle_rick');
});

it('converts snake_case strings', () => {
  expect(snake_case('pickle_rick')).to.equal('pickle_rick');
});
