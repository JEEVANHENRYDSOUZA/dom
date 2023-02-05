const list=document.querySelector('ul')
console.log(list)
const children_tags=list.children[2];
const inner_children=children_tags.children[0]
inner_children.innerHTML = "Contact"
const new_tag=document.createElement('li');
new_tag.innerHTML='<a href="#">Hire Me</a>'

list.appendChild(new_tag);




const footer_section=document.querySelector('footer');

console.log(footer_section)
const inner_element=footer_section.children[1];
inner_element.style.display='none';


const input_element= document.querySelector('.search-field input');
console.log(input_element)
input_element.placeholder='placeholder_changed'



const span_tag=document.querySelector('.hero-section .hero-left-section p span:nth-child(3)');
span_tag.innerText="it is now changed"


const img=document.querySelector('.hero-right-section img');
img.src="image.jpg"


const add_button=Document.createElement('button')
add_button.innerText="submit"

const location=document.querySelector('.hero-right-section-btns')
location.appendChild(add_button)
