# wordref

Word reference web scraper for returning JSON.

## Installation

### From source

I have a script to install this package from source, so that I don't need to
publish it to NPM.

```sh
$ git clone https://github.com/farbodsz/wordref && cd wordref
$ chmod +x install.sh
$ ./install.sh
```

### NPM

The [package from which this is forked](https://github.com/William5553/wordref)
can be installed with:

```sh
$ npm install --save wordref
```

## Usage

```javascript
const wr = require("wordref");

const word = "Rainbow";
const fromLang = "en";
const toLang = "fr";

wordref(word, fromLang, toLang).then((result) =>
  console.log(JSON.stringify(result, null, 2))
);
```

Returns:

```javascript
{
  "word": "Rainbow",
  "pronWR": "/ˈreɪnˌbəʊ/",
  "audio": [
    "/audio/en/us/us/en069238.mp3",
    "/audio/en/uk/general/en069238.mp3",
    "/audio/en/uk/Yorkshire/en069238-55.mp3",
    "/audio/en/Irish/en069238.mp3",
    "/audio/en/scot/en069238.mp3",
    "/audio/en/us/south/en069238.mp3",
    "/audio/en/Jamaica/en069238.mp3"
  ],
  "translations": [
    {
      "title": "Principal Translations",
      "translations": [
        {
          "from": "rainbow",
          "fromType": "n",
          "toType": "grupo nom",
          "to": "arco iris "
        }
      ]
    },
    {
      "title": "Compound Forms:",
      "translations": [
        {
          "from": "rainbow trout",
          "fromType": "n",
          "toType": "nf",
          "to": "trucha arcoiris "
        }
      ]
    }
  ]
}
```

## License

- [Original repo](https://github.com/fega/wordreference-api)
- [Repo from which this is forked](https://github.com/William5553/wordref)


[npm-image]: https://badge.fury.io/js/wordref.svg
[npm-url]: https://npmjs.org/package/wordref
