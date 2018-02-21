
(function (options) {

  var strings = Object.assign({
    passed: 'Accessibility seems fine 👌🏼',
    failed: 'Accessibility errors ⚠️'
  }, options.strings)

  function toDomElm (htmlString) {
    return document.createRange().createContextualFragment(htmlString);
  }

  function AuditItem (log, index) {
    var classes = [
      `Audit-groupLogItem`,
      `Audit-groupLogItem--${log.result.toLowerCase()}`,
      `Audit-groupLogItem--n${index}`,
      `Audit-groupLogItem--severity${log.severity}`
    ].join(' ');
    return `
      <div class="${classes}">
        <a href="${log.url}">${log.heading}</a>
        ${log.elements ? `<div class="Audit-groupLogItemElements">${log.elements}</div>` : ''}
      </div>
    `;
  }

  function AuditGroup (groupName, logs) {
    return `
      <div class="Audit-group">
        <h2 class="Audit-groupHeader">${groupName}</h2>
        <div class="Audit-groupLog">${ logs.length ? logs.map(AuditItem).join(' ') : '(None)' }</div>
      </div>
    `
  }

  function createAuditLog (auditLog) {
    var audit = auditLog.audit;
    if (!audit) return;
    var fails = audit.filter(function (log) { return log.result === 'FAIL' });
    var passes = audit.filter(function (log) { return log.result === 'PASS' });
    var nas = audit.filter(function (log) { return log.result === 'NA' });
    var $log = `
      ${ AuditGroup('Failed', fails) }
      ${ AuditGroup('Passed', passes) }
      ${ AuditGroup('N/A', nas) }
    `;
    var hasFailed = fails.length;
    var $container = `
      <div class="WellPanel">
        <div class="Audit${ hasFailed ? ' Audit--hasFails' : '' }" id="js-auditLog">
          <div class="Audit-status">${ hasFailed ? strings.failed : strings.passed }</div>
          ${ $log }
        </div>
      </div>
    `;
    return toDomElm($container)
  }

  function addAuditLog () {
    var currentUrl = window.location.href;
    if (window.fetch && currentUrl && currentUrl.indexOf('/') !== -1) {
      var urlParts = currentUrl.replace(/(http|https):\/\//g, '').split('/');
      var host = urlParts[0];
      var path = urlParts[1];
      if (host && path) {
        var jsonAuditUrl = [
          '/audits/',
          path.replace('.html', '.json')
        ].join('')
        var audit = fetch(jsonAuditUrl, {
          credentials: 'same-origin',
          cache: 'no-cache',
          headers: {
            'content-type': 'application/json'
          },
        })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          var $logElm = createAuditLog(json);
          if ($logElm) {
            document.body.appendChild($logElm);
            document.body.classList.add('Body--withPanel');
            var $log = document.getElementById('js-auditLog');
            $log.addEventListener('click', function () {
              $log.classList.toggle('Audit--open');
            })
          }
        })
      }
    }
  }

  if (window.showAuditLog) document.addEventListener("DOMContentLoaded", addAuditLog);

}({}))
