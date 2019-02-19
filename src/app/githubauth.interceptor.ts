import {Injectable} from '@angular/core' ;
import {HttpEvent , HttpInterceptor ,  HttpHandler, HttpRequest} from '@angular/common/http' ;
import {Observable } from 'rxjs/observable';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

@Injectable()
export class GithubAuthInterceptor implements HttpInterceptor {
    intercept ( req: HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("i m interceptor");
        return next.handle(req);
    }
}
