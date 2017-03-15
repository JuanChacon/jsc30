  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
<!-- evento e -->
  function playSound(e) {
//console.log(audio);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);// seleccion de propiedades, evento e.keycode, ${e.keyCode}-- template, traer un elemento a traves de la clase key (.querySelector) , dom--contexto, forma de variables que interactuan con el contexto, scope-- es lo que interactua con el cliente,, todo lo que se declara en js se herada, se conoce como prototype.

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; // para la funcion de todos juntos corrriendo

    key.classList.add('playing');
    audio.currentTime = 0;// inicia en el seg 0
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
