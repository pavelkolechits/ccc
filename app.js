const salaryCalc = (hours) => {
    const dogsFodPrise = 14;
    let temp;
    if(hours > 180){
        temp = (hours - 180) * 1.5
        return [Math.floor((temp + 180) * 8.7), Math.floor((temp + 180) * 8.7)/dogsFodPrise]
    }
    return [Math.floor(hours * 8.7), Math.floor(hours * 8.7)/dogsFodPrise]
}
let modal = document.querySelector('.modal');
let btnOk = document.querySelector('.ok');
let input = document.querySelector('input');
let btnCount = document.querySelector('.count')
let salary = document.querySelector('.salary')
let fod = document.querySelector('.fod')
modal.classList.add('hidden')

const actions = () => {
    let hours = input.value
    const [h, kg] = salaryCalc(hours)
    salary.innerHTML = `${h} BYN`
    fod.innerHTML = `${kg} kg`
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


