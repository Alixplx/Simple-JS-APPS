const rangeEl = document.getElementById('range')


rangeEl.addEventListener('input', (e) => {

    const value = +e.target.value
    const label = e.target.nextElementSibling

    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
    const labelWidth = getComputedStyle(label).getPropertyValue('width')

    const numberWidth = +rangeWidth.substring(0, rangeWidth.length - 2)
    const numberLabel = +labelWidth.substring(0, labelWidth.length - 2)

    const max = +e.target.max

    const left = value * (numberWidth / max) - numberLabel / 2

    label.style.left = `${left}px`

    label.innerHTML = value
})