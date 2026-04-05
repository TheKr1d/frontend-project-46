// {
//   type: 'added' | 'removed' | 'updated' | 'unchanged',
//   key: 'common',
//   value: { ... },
//   oldValue: { ... },
//   newValue: { ... },
//   children: [ … ],
// }
import _ from 'lodash'

const buildDiffTree = (node1, node2) => {
  const keys = _.union(Object.keys(node1), Object.keys(node2)).sort()
  const tree = []

  keys.forEach((key) => {
    const has1 = Object.hasOwn(node1, key)
    const has2 = Object.hasOwn(node2, key)

    if (!has1) {
      tree.push({
        type: 'added',
        key,
        value: node2[key],
      })
    }
    else if (!has2) {
      tree.push({
        type: 'removed',
        key,
        value: node1[key],
      })
    }
    else if (_.isEqual(node1[key], node2[key])) {
      tree.push({
        type: 'unchanged',
        key,
        value: node1[key],
      })
    }
    else if (_.isObject(node1[key]) && _.isObject(node2[key])) {
      tree.push({
        type: 'updated',
        key,
        children: buildDiffTree(node1[key], node2[key]),
      })
    }
    else {
      tree.push({
        type: 'updated',
        key,
        oldValue: node1[key],
        newValue: node2[key],
      })
    }
  })
  return tree
}

export default buildDiffTree
