(function () {
  function AnimatorJs(elements) {
    this._elements = elements;
    this._listeners = [];

    this.addListeners();

    document.addEventListener('scroll', () => {

      this.scrollHandler()

    });
  }

  AnimatorJs.prototype.addListeners = function () {

    for (let i = 0; i < this._elements.length; i++) {

      const id = Math.random();

      const element = this._elements[i];

      this._listeners.push({
        top: element.offsetTop - 100,
        id
      });

      element.setAttribute('data-id', id);

    }

  }

  AnimatorJs.prototype.scrollHandler = function () {

    this._listeners.forEach((listener) => {

      if (window.scrollY + window.innerHeight / 1.5 > listener.top) {

        let element = null;

        for (let i = 0; i < this._elements.length; i++) {

          if (this._elements[i].getAttribute('data-id') == listener.id) {

            element = this._elements[i];

          }

        }

        element.classList.add(element.getAttribute('data-animation-class'));

      }

    });
  }

  const Animator = new AnimatorJs(document.querySelectorAll('.animator'));
})();