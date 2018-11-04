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

function compareNames(a, b) {
  if (a.full_name < b.full_name) return -1
  if (a.full_name > b.full_name) return 1
  return 0
}

function compareDates(a, b) {
  if (Date(a.date_arrival) < Date(b.date_arrival)) return -1
  if (Date(a.date_arrival) > Date(b.date_arrival)) return 1
  return 0
}

const sortArray = (arr, opt) => {
  switch (opt) {
    case 'CUST_AZ':
      return arr.sort(compareNames)

    case 'CUST_ZA':
      return arr.sort(compareNames).reverse()

    case 'DATE_OLD':
      return arr.sort(compareDates)

    case 'DATE_NEW':
      return arr.sort(compareDates).reverse()

    default:
      return arr
  }
}

export { debounce, filterArray, sortArray }
