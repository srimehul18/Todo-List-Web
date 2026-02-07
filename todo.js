function addTask() {
    if (r.value === '') {
        alert('Task cannot be empty')
    }
    else {
        const ul = document.querySelector('.list')
        const li = document.createElement('li')
        li.className = 'li'
        const textDiv = document.createElement('div')
        textDiv.className = 'text'
        const h3 = document.createElement('h3')
        const b = document.createElement('button')
        b.style.width = "fit-content"
        b.style.height = "fit-content"
        h3.className = 'h3'
        b.className = 'b'
        b.textContent = "Add task description"
        h3.textContent = r.value
        textDiv.appendChild(h3)
        textDiv.appendChild(b)
        const actionDiv = document.createElement('div')
        actionDiv.className = 'actions'
        const done = document.createElement('button')
        done.className = "done"
        done.innerHTML = `
         <span class="icon">✓</span>
         <span class="text">Done</span>
        `
        const remove = document.createElement('button')
        remove.className = "remove"
        remove.innerHTML = `
         <span class="icon">✗</span>
         <span class="text">Remove</span>
        `
        const update = document.createElement('button')
        update.className = "update"
        update.textContent = ""
        update.innerHTML = `
         <span class="icon">✎</span>
         <span class="text">Update</span>
        `
        actionDiv.appendChild(done)
        actionDiv.appendChild(update)
        actionDiv.appendChild(remove)
        li.appendChild(textDiv)
        li.appendChild(actionDiv)
        ul.appendChild(li)

        r.value = ""


        remove.addEventListener('click', () => {
            li.remove()
        })
        done.addEventListener('click', () => {
            console.log("clicked")
            li.classList.toggle('completed')
        })

        update.addEventListener('click', () => {
            const h3 = textDiv.querySelector('.h3') 
            const current = h3.textContent 

            const updated = prompt('Update task:', current) 

            if (updated !== null && updated.trim() !== '') {
                h3.textContent = updated.trim() 
            }
        }) 

        b.addEventListener('click', () => {
            if (textDiv.querySelector('.des')) return

            const des = document.createElement('input')
            des.className = "des"
            des.placeholder = "Task description..."
            textDiv.appendChild(des)
            des.focus()

            des.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && des.value.trim() !== '') {
                    const p = document.createElement('p')
                    p.className = 'p'
                    p.textContent = des.value
                    textDiv.replaceChild(p, des)
                    b.style.display = "none"
                }
            })
        })
    }
}
const r = document.querySelector('#input')
document.querySelector('#submit').addEventListener('click', addTask)
r.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask() 
    }
}) 
const toggle = document.querySelector('#toggle');
toggle.addEventListener('click', () => {
    console.log("clicked")
    document.body.classList.toggle('dark');
});