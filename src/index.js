'use strict';

import { plugin } from 'osia';
import { js_beautify, css, html } from 'js-beautify';

export default function(opts = {}) {
  return plugin((file, resolve, reject) => {
    let contents;
    if(file.extname === '.js') contents = js_beautify(file.contents.toString(), opts);
    else if (file.extname === '.css') contents = css(file.contents.toString(), opts);
    else if (file.extname === '.html') contents = html(file.contents.toString(), opts);
    else contents = null;
    file.contents = new Buffer(contents);
    return file;
  });
};