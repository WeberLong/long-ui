export const debounce = (function () {
  let timer
  return function (func, delay) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(func, delay)
  }
})()
