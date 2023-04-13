const salaryCalc = (hours) => {
    let temp;
    if(hours > 180){
        temp = (hours - 180) * 1.5
        return Math.floor((temp + 180) * 8.7)
    }
    return Math.floor(hours * 8.7)
}
let modal = document.querySelector('.modal');
let btnOk = document.querySelector('.ok');
let input = document.querySelector('input');
let btnCount = document.querySelector('.count')
let salary = document.querySelector('.salary')
modal.classList.add('hidden')
const actions = () => {
    let hours = input.value
    salary.innerHTML = `${salaryCalc(hours)} BYN`
    input.classList.add('hidden')
    modal.classList.remove('hidden')
    btnCount.classList.add('hidden')
}
btnCount.addEventListener('click', actions)
btnOk.addEventListener('click', () => {
    input.classList.remove('hidden')
    modal.classList.add('hidden')
    btnCount.classList.remove('hidden')
})
