/* This code defines an interface named ToDoList with two properties:
    id of type number: This property represents the unique identifier for each ToDo item.
    item of type string: This property represents the text of the ToDo item.
The ToDoList interface can be used to define the shape of objects that will be used as ToDo items in the application. For example, a list of ToDo items can be defined as an array of objects of type ToDoList, where each object represents a single item in the list and contains the id and item properties.
Using interfaces is a good practice in TypeScript as it helps in making the code more maintainable, easier to read and understand, and reduces the chances of introducing bugs by enforcing a consistent shape of data throughout the application. 
25/02/2023 Indika Sirimanna*/
export interface ToDoList {
    id: number;
    item: string;  
  
}