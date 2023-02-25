/*Code defines an ErrorHandlerService which is used to handle errors in an Angular application.
The service has a single method called handleError<T>(operation ="operation", result?: T), which takes two arguments - operation (string) and result (optional). This method returns a function that takes an error as an argument and returns an Observable of type T.
In case of an error, the function logs the error message along with the operation name to the console and returns an Observable with the result value (if provided) or null as a default. This is done using the of() operator from RxJS.
This service can be used to handle errors in HTTP requests, database operations, or any other asynchronous operation in an Angular application. By default, it returns a null value, which allows the application to continue running instead of crashing due to unhandled errors.
 25/02/2023 Indika Sirimanna*/
import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

    handleError<T>(operation ="operation", result?: T){
        return (error: any): Observable<T> => {
          console.log('${operation} failed : ${error.message}');
       
        return of(result as T);
      };
    }

}
