module.exports = {
  bind,
  unbind
};

function find(el, selector, parent) {
  do {
    if (el.matches(selector)) {
      return el;
    }
    if (el === parent) {
      break;
    }
  } while ((el = el.parentElement));
}

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
