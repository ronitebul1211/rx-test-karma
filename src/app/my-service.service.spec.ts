import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';
import { MyServiceService } from './my-service.service';

// import { TestScheduler } from 'rxjs/testing';
// import { throttleTime } from 'rxjs';

// const testScheduler = new TestScheduler((actual, expected) => {
//   // asserting the two objects are equal - required
//   // for TestScheduler assertions to work via your test framework
//   // e.g. using chai.
//   expect(actual).deep.equal(expected);
// });

// // This test runs synchronously.
// it('generates the stream correctly', () => {
//   testScheduler.run((helpers) => {
//     const { cold, time, expectObservable, expectSubscriptions } = helpers;
//     const e1 = cold(' -a--b--c---|');
//     const e1subs = '  ^----------!';
//     const t = time('   ---|       '); // t = 3
//     const expected = '-a-----c---|';

//     expectObservable(e1.pipe(throttleTime(t))).toBe(expected);
//     expectSubscriptions(e1.subscriptions).toBe(e1subs);
//   });
// });

describe('MyServiceService', () => {
  let myServiceService: MyServiceService;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    myServiceService = TestBed.inject(MyServiceService);
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(myServiceService).toBeTruthy();
  });

  it('test local observable', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const source$ = cold('-a-b-c|', { a: 1, b: 2, c: 3 });
      expectObservable(source$).toBe('-a-b-c|', { a: 1, b: 2, c: 3 });
    });
  });

  // it('test time + myService function', () => {
  //   testScheduler.run((helpers) => {
  //     const { cold, expectObservable } = helpers;

  //     const acbDelayOfSecond$ = myServiceService.getTime();

  //     // const source$ = cold('-a-b-c|');
  //     // const final$ = source$.pipe(concatMap((val) => of(val).pipe(delay(100))));
  //     const expected = '- 100ms a 99ms b 99ms (c|)';
  //     expectObservable(acbDelayOfSecond$).toBe(expected);
  //   });
  // });
  // it('getNumbers + myService function', () => {
  //   testScheduler.run((helpers) => {
  //     const { expectObservable } = helpers;

  //     const testedStream$ = myServiceService.getNumbers();

  //     // const source$ = cold('-a-b-c|');
  //     // const final$ = source$.pipe(concatMap((val) => of(val).pipe(delay(100))));
  //     expectObservable(testedStream$).toBe('a-b-c|', { a: 1, b: 2, c: 5 });
  //   });
  // });

  // it('test service values', () => {
  // });
});

// * create a new TestScheduler for every test, this allows us to have a new instance for every test and create a clean case.

// * the TestScheduler exposes some helpers to test the code and these helpers call the function
//   indicated in the TestScheduler constructor of the TestScheduler to check the failure or the success of the test.

// * Using the expectObservable helper we can test our observable by comparing it with the expectation passed to the toBe method.
