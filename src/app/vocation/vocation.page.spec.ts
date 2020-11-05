import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VocationPage } from './vocation.page';

describe('VocationPage', () => {
  let component: VocationPage;
  let fixture: ComponentFixture<VocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
