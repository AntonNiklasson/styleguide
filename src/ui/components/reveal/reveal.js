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
    const triggers = document.querySelectorAll(reveal.selectors.trigger)

    for(let i=0; i < triggers.length; i++) {
      triggers[i].addEventListener('click', reveal.eventHandlers.onTriggerClick)
    }
  },

  eventHandlers: {
    onTriggerClick(event) {
      reveal.utils.toggleExpandedState(event.target)
    },

    handleTargetTransitionEnd(event) {
      const { target } = event;
      const isCollapsed = target.style.maxHeight === '0px';
      target.style.maxHeight = !isCollapsed ? 'none': null
      target.removeEventListener('transitionend', reveal.eventHandlers.handleTargetTransitionEnd)

      if (isCollapsed) {
        target.closest(reveal.selectors.root).querySelector(reveal.selectors.header).classList.remove(reveal.classNames.openHeader);
        target.style.display = 'none'
      } else {
        reveal.utils.preventFocusScroll(target)

        target.setAttribute('tabindex', -1)
        target.focus()

        target.addEventListener('keyup', reveal.eventHandlers.onKeyPressInContent);
        target.addEventListener('blur', reveal.eventHandlers.onBlurContent);
      }
    },

    onBlurContent(event) {
      if (!event.target.contains(event.relatedTarget)) {
        event.target.removeEventListener('keypress', reveal.eventHandlers.onKeyPressInContent);
      }
    },

    onKeyPressInContent(event) {
      if (event.which === 27) {
        reveal.utils.toggleExpandedState(this.parentNode.querySelector(reveal.selectors.trigger))
        this.removeEventListener('keypress', reveal.eventHandlers.onKeyPressInContent);
      }
    }
  },

  utils: {
    preventFocusScroll(target) {
      const oldScrollPosition = window.pageYOffset

      target.addEventListener('focus', e => {
        window.scrollTo(0, oldScrollPosition)
        e.preventDefault()
        e.stopPropagation()
      })
    },

    toggleExpandedState(node) {
      const targetId = node.getAttribute('aria-controls')
      const target = document.getElementById(targetId)
      const shouldExpand = node.getAttribute('aria-expanded') === 'false'

      if(target) {
        target.style.maxHeight = shouldExpand ? '0px' : target.scrollHeight + 'px'
        target.style.display = 'block'
        target.addEventListener('transitionend', reveal.eventHandlers.handleTargetTransitionEnd);
        node.setAttribute('aria-expanded', shouldExpand)

        if(!shouldExpand) {
          node.focus()
        }

        reveal.utils.setTargetHeight(node, target, shouldExpand)
      }
    },

    setTargetHeight(node, target, shouldExpand) {
      setTimeout(() => { // Wait for the DOM to set max-height on the target.
        target.style.maxHeight = (shouldExpand ? target.scrollHeight : 0) + 'px'

        if (shouldExpand) {
          node.closest(reveal.selectors.root).querySelector(reveal.selectors.header).classList.add(reveal.classNames.openHeader);
        }
      }, 50);
    }
  }
}

reveal.init()
