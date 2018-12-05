(() => {
  const Reveal = function(el) {
    this.root = el
    this.header = el.querySelector('[data-js-reveal-header]')
    this.trigger = el.querySelector('[data-js-reveal-trigger]')
    this.container = el.querySelector('[data-js-reveal-container]')
    this.isExpanded = this.trigger.getAttribute('aria-expanded') === 'true'

    this.registerEvents()
  }

  Reveal.prototype = {

    classList: {
      headerOpen: 'skv-reveal__header--open',
      containerOpen: 'skv-reveal__content-wrapper--open'
    },

    registerEvents() {
      this.onTriggerClick     = this.onTriggerClick.bind(this)
      this.onKeyUp            = this.onKeyUp.bind(this)
      this.updateUi           = this.updateUi.bind(this)
      this.setUiClose         = this.setUiClose.bind(this)
      this.setUiOpen          = this.setUiOpen.bind(this)
      this.onTransitionEnd    = this.onTransitionEnd.bind(this)
      this.preventFocusScroll = this.preventFocusScroll.bind(this)

      this.trigger.addEventListener('click', this.onTriggerClick)
      this.container.addEventListener('transitionend', this.onTransitionEnd)
      this.container.addEventListener('keyup', this.onKeyUp)
    },

    onTriggerClick() {
      this.isExpanded = !this.isExpanded
      this.updateUi()
    },

    onKeyUp(e) {
      if(e.which === 27 && this.isExpanded) {
        this.isExpanded = false
        this.updateUi()
      }
    },

    updateUi() {
      if(this.isExpanded)
        this.setUiOpen()
      else
        this.setUiClose()
    },

    setUiClose() {
      this.trigger.setAttribute('aria-expanded', false)
      this.container.style.maxHeight = `${this.container.scrollHeight}px`

      setTimeout(() => { // Wait for the DOM to set the containers max-height
        this.container.style.maxHeight = '0px'
        this.trigger.focus()
      }, 50)
    },

    setUiOpen() {
      this.trigger.setAttribute('aria-expanded', true)
      this.header.classList.add(this.classList.headerOpen)

      this.container.style.display = 'block'
      this.container.style.maxHeight = `${this.container.scrollHeight}px`

      this.container.addEventListener('focus', this.preventFocusScroll)
      this.container.setAttribute('tabindex', -1)
      this.container.focus()
    },

    onTransitionEnd() {
      if(this.isExpanded) {
        this.container.classList.add(this.classList.containerOpen)
        this.container.removeAttribute('style')
      } else {
        this.container.classList.remove(this.classList.containerOpen)
        this.header.classList.remove(this.classList.headerOpen)
        this.container.removeAttribute('style')
      }
    },

    preventFocusScroll() {
      const oldScrollPosition = window.pageYOffset
      window.scrollTo(0, oldScrollPosition)
      this.container.removeEventListener('focus', this.preventFocusScroll)
    }

  }

  const components = document.querySelectorAll('[data-js-reveal]')

  for(let i=0; i < components.length; i++) {
    new Reveal(components[i])
  }

})()
