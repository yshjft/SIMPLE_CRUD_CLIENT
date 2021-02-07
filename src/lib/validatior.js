export function validateRequired(target) {
  if (target === '' || target == null) return false
  return true
}
