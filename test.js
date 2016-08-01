import test from 'ava';
import m from './';

test('wolpi()', async t => {
	const data = await m();
	t.true(Array.isArray(data) === false);
});

test('wolpi.random()', async t => {
	const link = await m();
	t.true(Array.isArray(link) === false);
});
