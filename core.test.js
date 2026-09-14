import {test} from 'node:test';import assert from 'node:assert/strict';import {metrics} from './core.js';
test('comparable financial metrics',()=>assert.deepEqual(metrics({price:100,eps:5,revenue:120,previousRevenue:100,freeCashFlow:30}),{pe:20,revenueGrowth:19.999999999999996,fcfMargin:25}));
test('loss-making company has no meaningful positive PE',()=>assert.equal(metrics({price:100,eps:-1,revenue:0,previousRevenue:1,freeCashFlow:-2}).pe,null));
test('reject zero comparison denominator and non-finite values',()=>{assert.throws(()=>metrics({price:100,eps:5,revenue:120,previousRevenue:0,freeCashFlow:30}));assert.throws(()=>metrics({price:NaN,eps:5,revenue:120,previousRevenue:100,freeCashFlow:30}));});
