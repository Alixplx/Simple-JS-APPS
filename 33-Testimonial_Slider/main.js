
const testimonial = [

    {

        name: "Ahmed",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere nostrum itaque cupiditate voluptatem in pariatur blanditiis architecto! Molestiae, fugiat?"
    },
    {

        name: "Ali",
        photoUrl: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere nostrum itaque cupiditate voluptatem in pariatur blanditiis architecto! Molestiae, fugiat?"
    },
    {

        name: "Samir",
        photoUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere nostrum itaque cupiditate voluptatem in pariatur blanditiis architecto! Molestiae, fugiat?"
    },
    {

        name: "Sarmed",
        photoUrl: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere nostrum itaque cupiditate voluptatem in pariatur blanditiis architecto! Molestiae, fugiat?"
    }
]

let index = 0

const imgElement = document.querySelector('img')
const textElement = document.querySelector('.text')
const usernameElement = document.querySelector('.username')


updateTestimonial()

function updateTestimonial() {

    const {name, photoUrl, text} = testimonial[index]

    imgElement.src = photoUrl
    textElement.innerText = text
    usernameElement.innerText = name
    
    index++

    if (index === testimonial.length) {

        index = 0
    }

    setTimeout(() => {
        
        updateTestimonial()

    }, 5000);
}