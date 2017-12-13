module.exports = {
  bind: bind,
  unbind: unbind
};

function bind(el, selector, event, listener, options) {
  function handler(e) {
    if (e.target.matches(selector)) {
      e.delegateTarget = e.target;
      listener.call(el, e);
    }
  }
  el.addEventListener(event, handler, options);
  return handler;
}


function unbind(el, event, listener, options) {
  el.removeEventListener(event, listener, options);
}
