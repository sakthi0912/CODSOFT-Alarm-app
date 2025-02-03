import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ToneSelectionPage } from './tone-selection.page';

describe('ToneSelectionPage', () => {
  let component: ToneSelectionPage;
  let fixture: ComponentFixture<ToneSelectionPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations :[ToneSelectionPage],
      imports:[IonicModule.forRoot()]

    }).compileComponents();


    fixture =TestBed.createComponent(ToneSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
