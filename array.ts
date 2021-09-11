const friend: string[] = ['kamal', 'shuvo', 'jamal', 'habib'];
const salaries: number[] = [2000, 5555, 5000, 3000, 7000];

console.log(friend);

let max = 0;
for (const salary of salaries) {
    if (salary > max) {
        max = salary;

    }
}
console.log(max);
