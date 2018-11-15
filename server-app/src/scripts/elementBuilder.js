const $ = require('jquery');
module.exports =
  (tag = 'div', content = '', className = 'box') => {
    const element = $('<div/>', {
      'class': className,
      'html': content
    });
    return element;
  };
