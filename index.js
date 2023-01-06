// ryan le

(function() {
  window.addEventListener("load", init);

  function init() {
    // THIS IS THE CODE THAT WILL BE EXECUTED ONCE THE WEBPAGE LOADS
  }

  /**
  * Make sure to always add a descriptive comment above
  * every function detailing what it's purpose is
  * Use JSDoc format with @param and @return.
  */
  function exampleFunction1() {
    /* SOME CODE */
  }

  /** ------------------------------ Helper Functions  ------------------------------ */
  /**
  * Note: You may use these in your code, but remember that your code should not have
  * unused functions. Remove this comment in your own code.
  */

  /**
  * Returns the element that has the ID attribute with the specified value.
  * @param {string} idName - element ID
  * @returns {object} DOM object associated with id.
  */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
  * Returns the first element that matches the given CSS selector.
  * @param {string} selector - CSS query selector.
  * @returns {object} The first DOM object matching the query.
  */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
  * Returns the array of elements that match the given CSS selector.
  * @param {string} selector - CSS query selector
  * @returns {object[]} array of DOM objects matching the query.
  */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
  * Returns a new element with the given tag name.
  * @param {string} tagName - HTML tag name for new DOM element.
  * @returns {object} New DOM object for given HTML tag.
  */
  function gen(tagName) {
    return document.createElement(tagName);
  }

    /**
   * Clears all the event listeners for the element given.
   * @param {HTMLElement} element - any HTMLElement
   */
    function clearAllEventListeners(element) {
      let oldElement = element
      let newElement = oldElement.cloneNode(true);
      oldElement.parentNode.replaceChild(newElement, oldElement);
    }

    /**
     * Generates a random number from 0 to given max number.
     * @param {Number} max - Maximum possible number - 1
     * @returns {Number} - Random max number.
     */
    function getRandomInt(max) {
      return Math.floor(Math.random() * (Number(max) + 1));
    }

    /**
     * Generates a random number from given min to max number.
     * @param {Number} min - Minimum number
     * @param {Number} max - Maximum number
     * @returns random number in the range min to max - 1
     */
    function getRandomIntBetween(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    /**
     * Generates a random number from 0 to maximum available index of the array.
     * @param {Object[]} array - any array.
     * @returns {Number} Random index in the array.
     */
    function getRandomIndex(array) {
      return Math.floor(Math.random()*array.length);
    }


})();