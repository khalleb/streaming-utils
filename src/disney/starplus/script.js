var UtilStarPlus = () => {
  const config = {
    childList: true,
    attributes: true,
    subtree: true,
  };

  function callback(mutations, observer) {
    const skipButton = document.querySelector('.skip__button');

    if (skipButton) {
      skipButton.click();

      const fullscreenIcon = document.querySelector('.fullscreen-icon');
      if (fullscreenIcon) {
        fullscreenIcon.click();
      }
    }
  }

  function run() {
    try {
      var mutationObserver = new MutationObserver(callback);

      mutationObserver.observe(document, config);
    } catch (error) {
      console.log('Erro ao executar o MutationObserver:', error);
    }
  }

  return {
    run: run
  };
};

UtilStarPlus().run();