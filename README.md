# ![trash](media/wolpi.png)

> :tada: Find link to `WallpaperOfTheDay` and easily fetch random wallpaper's link

[![Build Status](https://travis-ci.org/CodeDotJS/wolpi.svg?branch=master)](https://travis-ci.org/CodeDotJS/wolpi)

## Install

```
$ npm install --save wolpi
```

## Usage

__`Wallpaper Of The Day`__

```js
'use strict';

const wolpi = require('wolpi');

wolpi().then(imageLink => {
	console.log(imageLink);
	// => { wallpaper: 'http://..../big_89d6f773e4e237f5d6189b83f87.png' }
});
```

__`Random Wallpapers`__
```js
'use strict';

const wolpi = require('wolpi');

wolpi.random().then(imageLink => {
	console.log(imageLink);
	// => { wallpaper: 'http://.../animals/big/big_dd944ab9966db34b.jpg' }
});
```

## Related

- __[`wolly`](https://github.com/CodeDotJS/wolly)__ `: Downloading wallpapers through command line done right!`

__`Thanks`__ __[`The PaperWall`](http://thepaperwall.com)__ __`for providing cool wallpapers`__

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)
