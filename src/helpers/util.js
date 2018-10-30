/* eslint-disable */
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
const debounce = (func, wait, immediate) => {
  let timeout
  return function() {
    let context = this,
      args = arguments
    const later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
/* eslint-enable */

/**
 * Filters an Array based on a string key
 * @param {Array.Object} arr Array to filter
 * @param {String} searchKey Key to Search
 */
const filterArray = (arr, searchKey) =>
  arr.filter(obj =>
    Object.keys(obj).some(key =>
      String(obj[key])
        .toLowerCase()
        .includes(searchKey.toLowerCase())
    )
  )

export { debounce, filterArray }
