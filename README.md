# osia-beautify
> Beautifer plugin for Osia

## Installation
```shell
$ npm install osia-beautify
```

## Usage
```javascript
import osia from 'osia';
import beautify from 'osia-beautify';

osia.task('beautify', () =>
  osia.open('./foo.html')
    .then(beautify())
    .then(osia.save('./'))
);
```

### Options
osia-beautify uses [js-beautify](https://www.npmjs.com/package/js-beautify) natively, so you can pass options in as you would with js-beautify

Example:
```javascript
import osia from 'osia';
import beautify from 'osia-beautify';

osia.task('beautify', () =>
  osia.open('./foo.html')
    .then(beautify({ indent_size: 2 }))
    .then(osia.save('./'))
);
```

## Credits
| ![seanc][avatar] |
|:---:|
| [Sean Wilson][github] |

  [avatar]: https://avatars.githubusercontent.com/u/13725538?v=3&s=125
  [github]: https://github.com/seanc