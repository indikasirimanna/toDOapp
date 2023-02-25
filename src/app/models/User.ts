/* code defines an interface named "User" which has four properties:
    id: a number representing the unique identifier of the user
    name: a string representing the name of the user
    email: a string representing the email address of the user
    password: a string representing the password of the user
This interface is likely used to define the structure of objects representing user data in a TypeScript application. By defining this interface, the developer can ensure that objects representing users always have the same structure and properties, which can help with maintaining the consistency and integrity of the data used in the application.
 25/02/2023 Indika Sirimanna*/
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
  }
  