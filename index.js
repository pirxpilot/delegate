module.exports = {
  bind,
  unbind
};

/* jshint boss:true */

function find(el, selector, parent) {
  do {
    if (el.matches(selector)) {
      return el;
    }
    if (el === parent) {
      break;
    }
  } while (el = el.parentElement);
}

/* jshint boss:false */

function bind(el, selector, event, listener, options) {
  function handler(e) {
    e.delegateTarget = find(e.target, selector, el);
    if (e.delegateTarget) {
      listener.call(el, e);
    }
  }
  el.addEventListener(event, handler, options);
  return handler;
}


function unbind(el, event, listener, options) {
  el.removeEventListener(event, listener, options);
}
