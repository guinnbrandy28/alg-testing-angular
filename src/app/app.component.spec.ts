import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, JokesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`should have as title 'alg-testing-angular'`, () => {
    expect(appComponent.title).toEqual('alg-testing-angular');
  });

  it('should link href should be correct', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('[data-content]')?.getElementsByTagName('a')[0].href).toContain('https://api.chucknorris.io/jokes/random');
  });

  it('should link href should be correct (alt version)', () => {
    const htmlElement = fixture.nativeElement as HTMLElement;
    expect(htmlElement.querySelector('[data-content]')?.getElementsByTagName('a')[0].href).toContain('https://api.chucknorris.io/jokes/random');
  });

  it('should render link', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector("a")?.textContent).toContain(
      "is so fun"
    );
  });

  it('should render link with exact text', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector("a")?.textContent).toEqual(
      "Angular testing is so fun, right?"
    );
  });

  it("should render a joke component", () => {
    const nativeElement = fixture.nativeElement;
    const jokes = nativeElement.querySelector("app-jokes");
    expect(jokes).not.toBeNull();
    expect(jokes).toBeDefined();
  });

  it("should render a joke component (alt version)", () => {
    const jokes = fixture.debugElement.query(By.css('#appJokes')).nativeElement;
    expect(jokes).not.toBeNull();
    expect(jokes).toBeDefined();
  });

  it("should render a title in the joke component", () => {
    const nativeElement = fixture.nativeElement;
    const text = nativeElement.querySelector("[data-joke-page-title]").textContent;
    expect(text).toContain(
      "Get your laugh on!!"
    );
  });

});
