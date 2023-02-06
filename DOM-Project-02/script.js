




let new_skill=document.querySelector('.accordian-wrapper')



let div= document.createElement('div')

div.classList.add('accordian');


 new_skill.appendChild(div);

let h3=document.createElement('h3');


div.appendChild(h3)

h3.innerText="Skills"


let new_p=document.createElement('p');



div.appendChild(new_p);

new_p.innerText="new skill i am preparing for and undergoing training";

const select_box=document.querySelectorAll('.accordian');




select_box.forEach((tag)=>{


    tag.addEventListener('click',(e)=>{
            let tag_name=e.target

            let p_tag=tag_name.nextElementSibling
            p_tag.style.display="block";
            p_tag.style.backgroundColor="green";

         
    });
})




const accordian= document.querySelectorAll('.accordian')


accordian.forEach((tag)=>{

tag.style.backgroundColor="#ADD8E6"


})
