export function dateToString(createdAt, updatedAt) {
  let time
  if (createdAt === updatedAt) {
    time = createdAt.split(' ')[0].split('-').join('.')
  } else {
    time = `${updatedAt.split(' ')[0].split('-').join('.')} 수정됨`
  }
  return time
}
