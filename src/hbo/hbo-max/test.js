var BingeFlix = (function () {
  let skipIntro = "#Viewport > div.default > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(5) > div > div > div > div > div:nth-child(1) > div";
  const pauseIcon = '/assets/images/player_controls/mobile/skip_button_default.png';

  var enabled = true;
  var target = {
    childList: true,
    attributes: false,
    subtree: true, //Omit or set to false to observe only changes to the parent node.
  }
  var intro_observer = new MutationObserver(skip_intro)

  function run() {
    try {
      var main = document.querySelector(skipIntro) || document;
      console.log('111111111111111');
      intro_observer.observe(main, target)
    } catch (e) { console.log(e) }
  }

  function skip_intro(mutations, observer) {
    //if (!enabled || window.location.href.search("watch") == -1) return;
    let skip = document.querySelector(skipIntro);
    if (skip) {
      var pauseElement = [...document.getElementsByClassName("default")]?.find(el => {
        return el.style['backgroundImage'] === 'url("' + pauseIcon + '")';
      })
      if (pauseElement) {
        const teste = pauseElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        teste.click();
        console.log('CLICOU');
      }
      // skip.click();
    }
  }

  function disconnect() {
    console.log('33333333333');
    intro_observer.disconnect();
  }

  function observe() {
    console.log('44444444444444');
    intro_observer.observe(document.querySelector(skipIntro) || document, target)
  }

  function toggle() {
    if (!enabled) disconnect()
    else observe()
    enabled = !enabled
  }

  return {
    toggle: toggle,
    run: run
  };
})();
// document.addEventListener('DOMContentLoaded', () => BingeFlix.run());
// run when the page is fully loaded
BingeFlix.run();
