const reveal = {

  selectors: {
    root: '[data-js-reveal]',
    header: '[data-js-reveal-header]',
    trigger: '[data-js-reveal-trigger]'
  },

  classNames: {
    triggerActive: 'reveal__toggle--close',
    openHeader: 'reveal__header--open',
  },

  init() {
    reveal.registerEvents()
  },

  registerEvents() {
    var triggers = document.querySelectorAll(reveal.selectors.trigger)

    for(var i=0; i < triggers.length; i++) {
      triggers[i].addEventListener('click', reveal.eventHandlers.onTriggerClick)
    }
  },

  eventHandlers: {
    onTriggerClick() {
      const targetId = this.getAttribute('aria-controls')
      const target = document.getElementById(targetId)
      const shouldExpand = this.getAttribute('aria-expanded') === 'false'

      if(target) {
        target.style.maxHeight = shouldExpand ? '0px' : target.scrollHeight + 'px'
        target.addEventListener('transitionend', reveal.eventHandlers.handleTargetTransitionEnd)
        this.setAttribute('aria-expanded', shouldExpand)

        // Wait for the DOM to set max-height on the target.
        setTimeout(() => {
          target.style.maxHeight = (shouldExpand ? target.scrollHeight : 0) + 'px'

          if (shouldExpand) {
            this.closest(reveal.selectors.root).querySelector(reveal.selectors.header).classList.add(reveal.classNames.openHeader);
          }
        }, 10);
      }
    },

    handleTargetTransitionEnd() {
      var isCollapsed = this.style.maxHeight === '0px';
      this.style.maxHeight = !isCollapsed ? 'none': null
      this.removeEventListener('transitionend', reveal.eventHandlers.handleTargetTransitionEnd)

      if (isCollapsed) {
        this.closest(reveal.selectors.root).querySelector(reveal.selectors.header).classList.remove(reveal.classNames.openHeader);
      } else {
        this.setAttribute('tabindex', -1)
        this.focus()
      }
    }
  }
}

reveal.init()
