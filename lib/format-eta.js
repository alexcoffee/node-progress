module.exports = function (eta) {
  if (isNaN(eta) || !isFinite(eta)) {
    return '?m ?s'
  }

  let s = eta / 1000

  if (s > 3600) {
    return Math.floor(s / 3600) + 'h ' + ((s % 3600) / 60).toFixed(1) + 'm'
  } else if (s > 60) {
    return Math.floor(s / 60) + 'm ' + ((s % 60)).toFixed(1) + 's'
  } else if (s > 10) {
    return (s).toFixed(1) + 's'
  } else {
    return s + 's'
  }
}
