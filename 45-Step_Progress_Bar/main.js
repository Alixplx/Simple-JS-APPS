const nextElement = document.getElementById('next')
const prevElement = document.getElementById('prev')
const stepElement = document.querySelectorAll('.step')
const progressElement = document.querySelector('.progress-bar-front')

let currentChecked = 1


nextElement.addEventListener('click', ()=> {

    currentChecked++

    if (currentChecked > stepElement.length) {

        currentChecked = stepElement.length
    }

    updateStepProgress()
})

prevElement.addEventListener('click', ()=> {

    currentChecked--

    if (currentChecked < 1) {

        currentChecked = 1
    }

    updateStepProgress()
})

function updateStepProgress() {

    stepElement.forEach( (stepEl, index) => {

        if (index < currentChecked) {

            stepEl.classList.add('checked')
            stepEl.innerHTML = ` 
            <i class="fas fa-check"></i> 
            <small>${index === 0 ? "Start" : index === stepElement.length - 1 ? "Final" : "Step " + index}</small>`

        } else {

            stepEl.classList.remove('checked')
            stepEl.innerHTML = `
                <i class="fas fa-times"></i>
            `
        }

    })

    const checkNumber = document.querySelectorAll('.checked')

    progressElement.style.width = ((checkNumber.length -1) / (stepElement.length -1)) * 100 + "%"

    if (currentChecked === 1) {

        prevElement.disabled = true

    } else if (currentChecked === stepElement.length) {

        nextElement.disabled = true

    } else {

        prevElement.disabled = false
        nextElement.disabled = false
    }
}