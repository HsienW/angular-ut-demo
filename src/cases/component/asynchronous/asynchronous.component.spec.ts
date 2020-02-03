import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AsynchronousComponent} from './asynchronous.component';

describe('AsynchronousComponent', () => {
  let component: AsynchronousComponent;
  let fixture: ComponentFixture<AsynchronousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsynchronousComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynchronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the message on submit and remove it after 2 seconds', fakeAsync(() => {

    const messageElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('banner works!');

    // expect(messageElement.query('p')).not.toExist();
    // spectator.click('button');
    // expect(spectator.query('p')).toExist();
    //
    // // Advance the virtual clock by 2 seconds
    // tick(2000);
    // spectator.detectChanges();
    // expect(spectator.query('p')).not.toExist();
  }));

});


// let spectator: Spectator<TestComponent>;
// const createComponent = createComponentFactory(TestComponent);
//
// beforeEach(() => (spectator = createComponent()));
//
// it('should show the message on submit and remove it after 2 seconds', fakeAsync(() => {
//   expect(spectator.query('p')).not.toExist();
//   spectator.click('button');
//   expect(spectator.query('p')).toExist();
//
//   // Advance the virtual clock by 2 seconds
//   tick(2000);
//   spectator.detectChanges();
//   expect(spectator.query('p')).not.toExist();
// }));
