function node(value = null, nextNode = null) {
    return {
        value,
        nextNode,
    }
}

function linkedLists() {
    return {
        list: {},
        head: {},
        tail: {},

        append(value) {
            const newNode = node()
            newNode.value = value

            if (Object.values(this.list).length === 0) {
                this.head = node(value)
                this.list = newNode
            } else {
                let tmp = this.list

                while (tmp.nextNode !== null) {
                    tmp = tmp.nextNode
                }

                tmp.nextNode = newNode
                this.tail = newNode
            }
        },

        prepend(value) {
            const newNode = node()
            newNode.value = value

            if (Object.values(this.list).length === 0) {
                this.list = newNode
            } else {
                let tmp = this.list

                this.list = newNode
                this.list.nextNode = tmp
            }

            this.head = node(value)
        },

        size() {
            let tmp = this.list

            let counter = 0

            if (Object.values(tmp).length == 0) {
                return counter
            } else {
                while (tmp.nextNode !== null) {
                    counter++
                    tmp = tmp.nextNode
                }
            }

            return counter
        },

        at(index) {
            let tmp = this.list

            let counter = 0

            if (Object.values(tmp).length === 0) {
                return tmp
            } else {
                if (index > this.size()) {
                    throw new Error('Size of list exceeded.')
                }

                while (counter < index && tmp !== null) {
                    counter++
                    tmp = tmp.nextNode
                }

                return tmp
            }
        },

        pop() {
            let tmp = this.list

            if (Object.values(tmp).length === 0) {
                return tmp
            } else {
                let listLength = this.size()

                tmp = this.at(listLength - 1)
                tmp.nextNode = null

                this.tail = tmp
            }

            return this.list
        },

        contains(input) {
            let tmp = this.list

            while (tmp !== null && tmp.value !== input) {
                tmp = tmp.nextNode
            }

            if (tmp === null) {
                return false
            } else {
                return true
            }
        },

        find(input) {
            let insideList = this.contains(input)

            if (insideList) {
                let idx = 0

                let tmp = this.at(idx)

                while (tmp.value !== input) {
                    idx++
                    tmp = this.at(idx)
                }

                return idx
            } else {
                return null
            }
        },

        toString() {
            let listLength = this.size()
            let idx = 0
            let tmp = this.list

            let valueArr = []

            while (idx <= listLength) {
                tmp = this.at(idx)
                valueArr.push(tmp.value)
                idx++
            }

            let word = ''

            valueArr.forEach((value, i) => {
                if (i >= 0 && i < listLength) {
                    word += ` ${value} ->`
                } else {
                    word += ` ${value} -> null`
                }
            })

            return word
        },

        // Extra credit
        insertAt(value, index) {
            let newNode = node(value)
            let listLength = this.size()

            if (index === 0) {
                this.prepend(value)
            } else if (index === listLength) {
                this.append(value)
            } else if (index > listLength || index < 0) {
                throw new Error('Length of list exceeded')
            } else {
                let prev = this.at(index - 1)
                let current = this.at(index)

                newNode.nextNode = current.nextNode
                prev.nextNode = newNode
            }

            return this.toString()
        },
    }
}

const test = linkedLists()
test.append('value')
test.append('value2')
test.append('value3')
test.prepend('value4')
// test.append('value5')
// test.prepend('value6')

// console.log(test.list)
// console.log(test.size())
// console.log(test.head)
// console.log(test.tail)
// console.log(test.at(1))
// console.log(test.pop())
// console.log(test.contains('value4'))
// console.log(test.find('value4'))
// console.log(test.toString())
console.log(test.insertAt('value6', 0))
console.log(test.head)
