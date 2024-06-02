const insertElement = document.getElementById('insert')

window.addEventListener('keydown', (event) => {

    insertElement.innerHTML = `
    
    <div class="key">

        ${event.key === ' ' ? 'Space' : event.key}
        <small>Event.Key</small>
    </div>

    <div class="key">

        ${event.keyCode}
        <small>Event.Code</small>
    </div>

    <div class="key">

        ${event.code}
        <small>Event.Code</small>
    </div>

    <div class="key">

        Press Any Key To Get The KeyCode
    </div>
    `
})