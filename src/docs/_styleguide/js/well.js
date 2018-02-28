
(function (){

  var views = {
    swatches: function (palette_colors, targetId) {

      var container = function (children) {
        return `<div class="row">${ children }</div>`
      }
      var column = function (model) {
        return `
          <div class="col" style="text-align: center;">
          <h2 class="h4">${ model.type }</h2><br>
          ${ model.colors.map(color).join('') }
          </div>
        `
      }
      var color = function (model) {
        return `
          <div class="swatch">
            <div class="swatch__preview${ model.border ? ' swatch__preview--bordered' : '' }" style="background: ${ model.hex };"></div>
            <div class="swatch__value">${ model.hex }</div>
            <div class="swatch__label">${ model.label }</div>
          </div>
        `
      }

      document.getElementById(targetId).innerHTML = `
        <div class="row">
          ${ palette_colors.map(column).join('') }
        </div>
      `;
    }
  }

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
    if (global('SG_WELL_PURPLE')) {
      bodyClasses.push('Body--purple')
    }
    if (global('SG_VIEW')) {
      var view = global('SG_VIEW');
      if (typeof views[view.name] === 'function') {
        views[view.name].apply(views[view.name], view.args || [])
      }
    }
    if (isInIframe) {
      if (!global('SG_WELL_NOT_PADDED')) {
        bodyClasses.push('Body--padded')
      }
    }
    bodyClasses.forEach(function (cls) { body.classList.add(cls) });
  }

  document.addEventListener('DOMContentLoaded', init);

}())
