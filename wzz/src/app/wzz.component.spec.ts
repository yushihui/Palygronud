import { TestBed, async } from '@angular/core/testing';

import {WzzComponent} from './wzz.component';

describe('WzzComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WzzComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(WzzComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Wzz works!'`, async(() => {
    const fixture = TestBed.createComponent(WzzComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Wzz works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(WzzComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Wzz works!');
  }));
});
