## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-005

### 📅 Deadline For 60 marks: 29th August, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks

### 📅 Deadline For 30 marks: Any time after 29th August.

---


### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans : 1.getElementById: It is used to select an html element by its "id".As "id" is unique in the overall document, so it will select a specific element. In example : <h1 id="title">Hello</h1>, then  document.getElementById("title") .

2.getElementsByClassName: It is used to select many elements that have the same class name.If we select elements by the class name we dont get single element rather than we get a list of elements.In example : 
<p class="text">One</p>
<p class="text">Two</p>
 then document.getElementsByClassName("text").

 3.querySelector : It is more powerful . Using querySelector we can select elements with class name, id , tag name etc . It only gives the first matching element. Example:
    <h1 id="title">Welcome</h1>
    <p class="text">This is the first paragraph.</p>
    <p class="text">This is the second paragraph.</p>

    document.querySelector(".text");
    

4.querySelectorAll : It is almost same as querySelector but the main difference between them is that querySelector gives only the first matching element and querySelectorAll gives all matching elements as an nodeList. Example :
    <h1 id="title">Welcome</h1>
    <p class="text">This is the first paragraph.</p>
    <p class="text">This is the second paragraph.</p>

    document.querySelectorAll("p");


  



2. How do you **create and insert a new element into the DOM**?
Ans: The document.createElement()  method is used to create a new HTML element.

1 . we use set a variable and then write that command document.createElement()
2 . then we can set - inner text , className and id 
3 . when we insert it into DOM - we need a parent element to attach it
  i.appendchild .
  ii.insert it before another element.
  iii.insert element with append and prepend.

  Example :

 const  newElement = document.createElement('p');

Then, get the patent element to add the new element

 const  parentElement = document.getElementById('container');   

 Then, add the new element as a child of 'container'  

  parentElement.appendChild(newElement);   


3. What is **Event Bubbling** and how does it work?
Ans: Event bubbling is a JavaScript mechanism where an event, like a click,   triggers on a child element and then propagates upwards through its parent elements and all the way to the document root.

How Event Bubbling Works:

1. Event Trigger:
               An event as a click, occurs on a specific target element within the Document Object Model. 

2. Target Phase:
              The event listener on the target element itself is triggered first. 

3. Bubbling Phase:
                 The event then "bubbles" up from the target element to its immediate parent. 

4. Ancestor Propagation:
                     If the parent element also has an event listener for that event, it gets triggered. 


5. Up the Hierarchy:
                The event continues to bubble up through each subsequent parent, grandparent, and so on, until it reaches the outermost element of the  Document Object Model, or is explicitly stopped. 

4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: Event delegation means putting an event listener on a parent element, instead of adding event listeners to all the child elements one by one.Because of event bubbling, when we click a child element, the event goes up to the parent. The parent can “catch” the event and check which child was clicked.

Usefulness : 
Event Delegation is useful for it's better performance and handling dynamic element.



5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans : Difference between preventDefault() and stopPropagation()  

1.preventDefault() - it will stop the default acton.as like - when we click a link won't open the page and submitting a form won't reload the page.

2.stopPropagation() - it will stop the event from moving upward to parent element. as like - when we clicking a button inside a div will not trigger the div's click event.

---
