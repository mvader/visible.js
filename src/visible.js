/**
 * Checks if an element is visible on the screen.
 * @param {HTMLElement|Element} elem Element to check
 * @param {boolean|undefined} partial Check if is partially visible, if not provided or false this function will only return true if all element is visible
 * @param {boolean|undefined} hidden true if element is hidden
 * @param {string|undefined} direction vertical, horizontal or both with any other value
 * @return {boolean|undefined}
 */
export default function visible(elem, partial, hidden, direction = 'both') {
  if (!elem) {
    return undefined;
  }

  const windowHeight = window.innerHeight,
    windowWidth = window.innerWidth,
    clientSize = hidden === true ? elem.offsetWidth * elem.offsetHeight : true,
    rect = elem.getBoundingClientRect(),
    topVisible = rect.top >= 0 && rect.top < windowHeight,
    bottomVisible = rect.bottom > 0 && rect.bottom <= windowHeight,
    leftVisible = rect.left >= 0 && rect.left < windowWidth,
    rightVisible = rect.right > 0 && rect.right <= windowWidth,
    verticalVisible = partial ? topVisible || bottomVisible
      : topVisible && bottomVisible,
    horizontalVisible = partial ? leftVisible || rightVisible
      : leftVisible && rightVisible;

    switch (direction) {
      case 'vertical':
        return clientSize && verticalVisible;

      case 'horizontal':
        return clientSize && horizontalVisible;

      default:
        return clientSize && horizontalVisible && verticalVisible;
    }
}
