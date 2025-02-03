import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AddAlarmPage } from './add-alarm.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AddAlarmPage', () => {
  let component: AddAlarmPage;
  let fixture: ComponentFixture<AddAlarmPage>;

  beforeEach(async() => {
   await TestBed.configureTestingModule({
    declarations :[AddAlarmPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports:[IonicModule.forRoot()]
   }).compileComponents();



    fixture =TestBed.createComponent(AddAlarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
