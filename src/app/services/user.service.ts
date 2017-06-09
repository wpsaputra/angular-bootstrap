import { User } from './../classes/User';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
    private URL = 'https://api.myjson.com/bins/9xhjx';

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        return this.http.get(this.URL)
            .map((response:Response) => response.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}