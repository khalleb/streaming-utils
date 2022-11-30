var UtilNetflix = () => {
  const config = {
    childList: true,
    attributes: true,
    subtree: true,
  };

  function callback(mutations, observer) {
    if (document.querySelector(`button.watch-video--skip-content-button`)) {
      document.querySelector(`button.watch-video--skip-content-button`).click();
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

UtilNetflix().run();