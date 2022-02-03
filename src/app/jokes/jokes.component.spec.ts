import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesComponent } from './jokes.component';
import { Joke } from './models/joke.model';

describe('JokesComponent', () => {
  let component: JokesComponent;
  let fixture: ComponentFixture<JokesComponent>;
  const joke = new Joke();
  joke.content = "fake joke";
  joke.category = "fake category";
  joke.title = "fake title";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render a title", () => {
    const nativeElement = fixture.nativeElement;
    const text = nativeElement.querySelector("[data-joke-page-title]").textContent;
    expect(text).toContain(
      "Get your laugh on!!"
    );
  });

  it("should render a single joke", () => {
    const compiled = fixture.debugElement.nativeElement;
    //console.log(compiled.querySelectorAll("[data-joke-container]"));
    const jokes = compiled.querySelectorAll("[data-joke-container]");
    expect(jokes.length).toEqual(2);
  });

  it("should render a joke in with correct title", () => {
    const compiled = fixture.debugElement.nativeElement;
    const jokes = compiled.querySelectorAll("[data-joke-container]");    
    const text = jokes[0].querySelector("[data-joke-title]").textContent;
    expect(text).toEqual(`Title: ${joke.title}`);
  });

  it("should render a joke in with correct category", () => {
    const compiled = fixture.debugElement.nativeElement;
    const jokes = compiled.querySelectorAll("[data-joke-container]");    
    const text = jokes[0].querySelector("[data-joke-category]").textContent;
    expect(text).toEqual(`Category: ${joke.category}`);
  });

  it("should render a joke in with correct content", () => {
    const compiled = fixture.debugElement.nativeElement;
    const jokes = compiled.querySelectorAll("[data-joke-container]");    
    const text = jokes[0].querySelector("[data-joke-content]").textContent;
    expect(text).toEqual(joke.content);
  });
});
