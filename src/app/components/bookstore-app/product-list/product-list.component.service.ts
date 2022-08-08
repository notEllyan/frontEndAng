import{ Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Book} from './model/Book';

@Injectable()
export class BooksService{
    private url='https://localhost:44382/api/bookstore'

    httpOptions={
        Headers: new HttpHeader({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){
    }
    geBack(){
        return this.http.get(this.url)
    }
}