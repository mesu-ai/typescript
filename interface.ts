


interface info {
    roll?: number, name: string, age: number, class?: number, school: string
}

const studentInfo: info = {
    name: 'jamal', age: 22, class: 7, roll: 1, school: 'assasuni'

}

interface details extends info {
    firstname: string, lastname: string
}

const teacherInfo: details = {
    firstname: 'md', name: 'zulfiqure', lastname: 'islam', age: 45, school: 'kodonda'
}