import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesBlockComponent } from './certificates-block.component';

describe('CertificatesBlockComponent', () => {
  let component: CertificatesBlockComponent;
  let fixture: ComponentFixture<CertificatesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatesBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificatesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
