export const sortPostsByDate = (item1: any, item2: any) => {
  if (item1.created < item2.created) {
    return -1
  } else {
    return 1
  }
}
