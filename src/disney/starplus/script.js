var UtilStarPlus = () => {
  const config = {
    childList: true,
    attributes: true,
    subtree: true,
  };

  function callback(mutations, observer) {
    const targetNode = document.querySelector('.skip__button');
    if (targetNode) {
      targetNode.click();
      const fullscreen = document.querySelector('.fullscreen-icon');
      if (fullscreen) {
        fullscreen.click();
      }
    }
  }

  function run() {
    try {
      var mutationObserver = new MutationObserver(callback)
      mutationObserver.observe(document, config);
    } catch (erro) {
      console.log(erro)
    }
  }

  return {
    run: run
  };
};

UtilStarPlus().run();