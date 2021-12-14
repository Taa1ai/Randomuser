async function get() {
    let requset = await fetch('https://randomuser.me/api/?results=30')
    let response = await requset.json()
    console.log(response.results);
    response.results.forEach(el => {
        const row = document.getElementById('row')
        const col = document.createElement('div')
        const box = document.createElement('div')
        const name = document.createElement('h3')
        const email = document.createElement('p')
        const age = document.createElement('p')
        const date = document.createElement('p')
        let img = document.createElement('img')
        img.className = 'img'
        age.innerHTML = 'age:  ' + el.dob.age
        date.innerHTML = 'date: ' + el.dob.date
        name.innerHTML = 'name:  ' + el.name.first + '  ' + el.name.last
        email.innerHTML = 'email:  ' + el.email
        img.src = el.picture.large
        row.append(col)
        col.append(box)
        col.className = 'col-3'
        box.append(img, name, email, age, date)
        box.className = 'box'
    });
}
get()