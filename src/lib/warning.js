export function resetWarning(ref, warnRef) {
  ref.current.style.border = '1px solid silver'
  warnRef.current.style.display = 'none'
}

export function setWarning(ref, warnRef) {
  ref.current.style.border = '1px solid red'
  warnRef.current.style.display = 'block'
}
