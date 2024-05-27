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

            let counter = 1

            if (Object.values(tmp).length == 0) {
                counter = 0
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

                while (counter < index) {
                    counter++
                    tmp = tmp.nextNode
                }

                return tmp
            }
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
console.log(test.at(0))
