  console.log('well startswith');
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(search, pos) {
      return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    };
  }


(function (){

  function global (str) {
    return window[str]
  }

  function inIframe () {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  function init () {
    var isInIframe = inIframe();
    var bodyClasses = [];
    var body = document.body;
    if (isInIframe) {
      if (global('SG_WELL_PURPLE')) {
        bodyClasses.push('Body--purple')
        if (!global('SG_WELL_NOT_PADDED')) bodyClasses.push('Body--padded')
      } else {
        bodyClasses.push('Body--padded')
      }
      bodyClasses.forEach(function (cls) { body.classList.add(cls) });
    }
  }

  document.addEventListener('DOMContentLoaded', init);

}())
