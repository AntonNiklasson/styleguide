
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

    if (isInIframe) {
      if (global('SG_WELL_PURPLE')) {
        var bodyClass = 'Body--paddedPurple'
      } else {
        var bodyClass = 'Body--padded'
      }
      document.body.classList.add(bodyClass)
    }
  }

  document.addEventListener('DOMContentLoaded', init);

}())
