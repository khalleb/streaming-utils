var UtilHboMax = () => {
  const config = {
    childList: true,
    attributes: true,
    subtree: true,
  };

  function callback(mutations, observer) {
    const targetNode = Array.from(document.body.querySelectorAll("[role=\"button\"]"));
    if (targetNode !== null && targetNode !== undefined && targetNode.length > 0) {
      const button = targetNode.find(e => ["SkipButton", "UpNextButton"].includes(e.dataset["testid"]));
      if (button)
        button.click();
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

UtilHboMax().run();