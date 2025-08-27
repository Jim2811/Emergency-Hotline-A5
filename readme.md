Answers of the Questions 
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: All the methods are JS DOM methods to select HTML element.
getElementById => selects a single html element using the id name.
getElementsByClassName => selects all the element with the class name and returns a HTML Collection.
querySelector => it is use to select elements that match specific css selector and return a single element.
querySelectorAll => it selects all elements that match a specified CSS selector and return a NodeList of elements.

2. How do you create and insert a new element into the DOM?
answer: 
To create new element using DOM I use - document.createElement() method. 
And we can use innerHtml(), appendChild() to insert new element. We can use innerText() to insert text in html.

3. What is Event Bubbling and how does it work?
answer:
Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements.
How event works -
    1. An event is triggered on an element, often as a result of user interaction like a click or a key press.
    2. The event starts propagating from the target element (where the event originated).
    3. The event moves upward through the DOM hierarchy, visiting each parent element in turn.
    4. At each step, if a parent element has an event listener for the specific event type, the listener is executed.
    5. This bubbling process continues until the event reaches the topmost parent (usually the `window` object).

4. What is Event Delegation in JavaScript? Why is it useful?
answer:
Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object. 
It is useful because it improve performance by reducing the number of listeners, simplify code by centralizing logic, and improve maintainability by automatically handling dynamically added elements without needing to reattach listeners. 
5. What is the difference between preventDefault() and stopPropagation() methods?
answer:
Difference between preventDefault() and stopPropagation() methods -

preventDefault() => this method is used to  prevent default actions. Such as in a form the if we click submit button the page will be automatically reload. if we use this method on the submit button it will remove the buttons default action and the page will not reload after click the submit button inside a form.

stopPropagation(): This method prevents the event from propagating further up or down the DOM tree.