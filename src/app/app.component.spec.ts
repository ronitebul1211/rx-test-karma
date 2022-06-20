import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent Describe Title', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rx-test'`, () => {
    let stringTypeScriptTest: string;
    stringTypeScriptTest = 'rx-test';
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(stringTypeScriptTest);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'rx-test app is running!'
    );
  });
});

// Resource -> https://timdeschryver.dev/blog/integrate-jest-into-an-angular-application-and-library#creating-an-angular-application

// Test Runner: karma vs jest
// karma + jasmine (default)
// npm test (ng test) -> This should open a new browser window, it run all app test and show the results on browser + terminals.
// * work good with typescript
// not work with run & debug buttons
