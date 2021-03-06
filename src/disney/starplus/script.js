
var UtilStarPlus = (function () {

  var target = {
    childList: true,
    attributes: false,
    subtree: true,
  }

  var intro_observer = new MutationObserver(skipIntro)

  function run() {
    try {
      const elementSelectorIntro = document.querySelector('.skip__button') || document;
      intro_observer.observe(elementSelectorIntro, target);
    } catch (e) {
      console.log(e)
    }
  }

  function skipIntro(mutations, observer) {
    const skip = document.querySelector(".skip__button");
    if (skip) {
      skip.click();
      const fullscreen = document.querySelector('.fullscreen-icon');
      if (fullscreen) {
        fullscreen.click();
      }
    }
  }
  return {
    run: run
  };
})();

UtilStarPlus.run();


// const NETFLIX = 'Netflix';
// const PRIME = 'Prime Video';
// const DISNEY = 'Disney+';

// function skip() {
//   const skipSelectors = [
//     // Netflix
//     {
//       platform: NETFLIX,
//       info: 'Skipping credits.',
//       selector: '.skip-credits > a'
//     },
//     {
//       platform: NETFLIX,
//       info: 'Playing next episode.',
//       selector: '[data-uia="next-episode-seamless-button"]'
//     },
//     {
//       platform: NETFLIX,
//       info: 'Continue playing.',
//       selector: `[aria-label='Continue Playing']`
//     },
//     {
//       platform: NETFLIX,
//       info: 'Skipping recap.',
//       selector: `[aria-label='Skip Recap']`
//     },
//     {
//       platform: NETFLIX,
//       info: 'Skipping intro.',
//       selector: `[aria-label='Skip Intro']`
//     },
//     // Prime Video
//     {
//       platform: PRIME,
//       info: 'Skipping credits.',
//       selector: '.f1oordr3'
//     },
//     {
//       platform: PRIME,
//       info: 'Playing next episode.',
//       selector: '.fd8k8m6'
//     },
//     {
//       platform: PRIME,
//       info: 'Skipping ad.',
//       selector: '.adSkipButton'
//     },
//     {
//       platform: PRIME,
//       info: 'Skipping recap.',
//       selector: '.skipElement'
//     },
//     // Disney Plus
//     {
//       platform: DISNEY,
//       info: 'Skipping credits',
//       selector: '.skip__button'
//     },
//     {
//       platform: DISNEY,
//       info: 'Playing next episode',
//       selector: 'button.sc-gipzik.play'
//     },
//   ];
//   for (skipSelector of skipSelectors) {
//     const skipButton = document.querySelector(skipSelector.selector);
//     if (skipButton) {
//       skipButton.click();
//       console.log(`${skipSelector.platform}: ${skipSelector.info}`);
//       break;
//     }
//   }
// }

// setInterval(() => skip(), 500);

