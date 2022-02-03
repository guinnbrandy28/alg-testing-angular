import { Component, OnInit } from "@angular/core";
import { Joke } from "../jokes/models/joke.model";
import { JokesService } from "./jokes.service";

@Component({
  selector: "app-jokes",
  templateUrl: "./jokes.component.html"
})
export class JokesComponent implements OnInit {
  jokes: Array<Joke> = new Array<Joke>();
  message: string = "";
  title: string = "";
  
  constructor(private jokesService: JokesService) {}  

  setStaticJoke(): void {
    const joke = new Joke();
    joke.content = "fake joke";
    joke.category = "fake category";
    joke.title = "fake title";
    this.jokes.push(joke);
  }

  setServiceJoke(): void {
    this.jokesService.getJoke().subscribe((data) => {
      this.jokes.push(data);
    });
  }

  ngOnInit(): void {
    this.title = "Get your laugh on!!";
    this.message = "Lighten and brighten up your day with a Chuck Norris joke.";

    this.setStaticJoke(); 
    this.setServiceJoke();
  }
}
