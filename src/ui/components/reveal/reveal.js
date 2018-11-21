const reveal = {

  selectors: {
    trigger: '[data-js-reveal-trigger]'
  },

  classNames: {
    triggerActive: 'reveal__toggle--close'
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
        target.previousElementSibling.classList.toggle('reveal__header--open');

        setTimeout(() => {
          target.style.maxHeight = (shouldExpand ? target.scrollHeight : 0) + 'px'
        }, 10);
      }
    },

    handleTargetTransitionEnd() {
      this.style.maxHeight = this.style.maxHeight !== '0px' ? 'none': null
      this.removeEventListener('transitionend', reveal.eventHandlers.handleTargetTransitionEnd)
      this.setAttribute('tabindex', -1)
      this.focus()
    }
  }
}

reveal.init()
