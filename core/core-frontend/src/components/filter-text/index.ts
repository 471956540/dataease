import FilterText from './src/FilterText.vue'

export { FilterText }

const fieldText = (field, options) => {
  for (let index = 0; index < options.length; index++) {
    const element = options[index]
    if (field === element.field) {
      return element.title
    }
  }
}
const valueTextFormTree = (val, options) => {
  let result = null
  const stack = [...options]
  while (stack.length) {
    const item = stack.pop()
    if (item.value === val) {
      result = item.label
      break
    }
    if (item.children?.length) {
      item.children.forEach(kid => stack.push(kid))
    }
  }
  return result || val
}
const valueText = (field, val, options) => {
  for (let index = 0; index < options.length; index++) {
    const element = options[index]
    if (field === element.field) {
      let isTree = false
      const selectOption = element.option
      for (let i = 0; i < selectOption.length; i++) {
        const item = selectOption[i]
        if (item.hasOwnProperty('children')) {
          isTree = true
          break
        }
        if ((item.id || item.value) === val) {
          return item.name || item.label
        }
      }
      if (isTree) {
        return valueTextFormTree(val, selectOption)
      }
    }
  }
  return val
}
export const convertFilterText = (conditions, options) => {
  const result = []
  conditions.forEach(condition => {
    const field = condition.field
    const ope = condition.operate
    const value = condition.value
    const fieldName = fieldText(field, options)
    const textOpe = ':'
    let separator = '，'
    if (ope === 'in') {
      separator = '、'
    }
    if (ope === 'between') {
      separator = '~'
    }
    let valText = value

    if (value) {
      if (Array.isArray(value)) {
        const valTextArray = value.map(val => valueText(field, val, options))
        valText = valTextArray.join(separator)
      }
      const obj = fieldName + textOpe + valText
      result.push(obj)
    }
  })
  return result
}
