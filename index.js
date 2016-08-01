'use strict';

const got = require('got');
const cheerio = require('cheerio');

const url = 'http://www.thepaperwall.com/';
const randomImg = 'http://www.thepaperwall.com/shuffle.php';

const mainImage = imageLink => {
	return url + imageLink.split('image=/')[1];
};

const shuffleImage = imageLink => {
	return url + imageLink.split('image=/')[1].replace('small/small_', 'big/big_');
};

const wpod = () => {
	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			wallpaper: mainImage($('.monitor_slider div img').attr('src'))
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong';
		}
		throw err;
	});
};

const wolpi = module.exports = () => wpod();

wolpi.random = () => {
	return got(randomImg).then(res => {
		const $ = cheerio.load(res.body);
		return {
			wallpaper: shuffleImage($('a.thumbnail_cont img').attr('src'))
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong';
		}
		throw err;
	});
};
