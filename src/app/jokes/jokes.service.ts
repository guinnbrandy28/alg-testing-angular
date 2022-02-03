import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Joke } from "../jokes/models/joke.model";

@Injectable({
  providedIn: "root"
})
export class JokesService {  
  getJoke(): Observable<Joke> {
    const joke = new Joke();
    joke.content = "something so funny";
    joke.category = "Random";
    joke.title = "Random joke of the day";
    return of(joke);
  }
}
