export const formatData = (data, columns) => {
  const rows = Math.floor(data.length / columns)
  let lastRowElements = data.length - rows * columns
  while (lastRowElements !== columns) {
    data.push({
      id: `${lastRowElements + 1}`,
      image: `empty-${lastRowElements}`,
      empty: true,
    })
    lastRowElements += 1
  }
  return data
}
