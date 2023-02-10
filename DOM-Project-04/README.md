#### Project-01 

- **Question1** -> Replace contact with project and add hire me to list

![image](./firstAssignmentImage/task1Output.png)

```javascript
var unorderList = document.querySelector('ul');

var firstList = unorderList.children[2];
firstList.innerHTML = 'Project';

var list2 = document.createElement('li');
list2.innerHTML = '<a href="#">Hire Me</a>';
unorderList.appendChild(list2);
```

- **Question2** -> Change text inside placeholder from "search" to "search my project"

![image](./firstAssignmentImage/task2Output.png)

```javascript
var input = document.querySelector('input');

input.placeholder = "Search My Project";
```

- **Question3** -> Replace Contact with Projects

![image](./firstAssignmentImage/task3Output.png)

```javascript
var unorderList = document.querySelector('ul');

unorderList.children[2].innerHTML = 'Projects';
```

- **Question4** -> Replace image

![image](./firstAssignmentImage/task4Output.png)

```javascript
var image = document.querySelector('img');

image.setAttribute('src', './image.jpg');
```

- **Question5** -> Add a button next to chat me

![image](./firstAssignmentImage/task5Output.png)

```javascript
var buttonDiv = document.getElementsByClassName('hero-right-section-btns');

var button = document.createElement('button');
button.innerHTML = 'Support Me';

buttonDiv[0].appendChild(button);
```

