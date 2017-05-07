#!/usr/bin/env node

const shuffle = require('playlist-shuffle');

const from = extract(process.argv, '-from');
const to = extract(process.argv, '-to')[0];

if (from.length === 0) {
	console.error('You should use `from` key to specify input locations');
	return;
}

if (!to) {
	console.error('You should use `to` key to specify output location');
	return;
}

shuffle(from, to)
	.then(() => console.log('Your mix is ready. Lets rock!'));

function extract(arr, key) {
	const values = [];

	const index = arr.findIndex(x => x === key);

	if (index === -1) return values;

	for (let i = index + 1; i < arr.length; i++) {
		if (arr[i][0] === '-') break;

		values.push(arr[i]);
	}

	return values;
}