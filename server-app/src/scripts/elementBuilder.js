import $ from 'jquery';
export const builder =
  (tag = 'div', content = '', className = 'box') => {
    const element = $('<div/>', {
      'class': className,
      'html': content
    });
    return element;
  };
