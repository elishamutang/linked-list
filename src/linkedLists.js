function node() {
    return {
        value: null,
        nextNode: null,
    }
}

function linkedLists() {
    return {
        list: {},

        append(value) {
            const newNode = node()
            newNode.value = value

            if (Object.values(this.list).length === 0) {
                this.list = newNode
            } else {
                let tmp = this.list

                while (tmp.nextNode !== null) {
                    tmp = tmp.nextNode
                }

                tmp.nextNode = newNode
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
        },
    }
}

const test = linkedLists()
test.append('value')

test.append('value2')
test.prepend('value3')
// test.prepend('value4')
// test.append('value5')
test.prepend('value6')

console.log(test.list)
