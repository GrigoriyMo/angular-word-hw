import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '../../services/translate/translate.service'
@Component({
  selector: 'app-translatecheckform',
  templateUrl: './translatecheckform.component.html',
  styleUrls: ['./translatecheckform.component.css']
})
export class TranslatecheckformComponent implements OnInit {
  @Input() engWord = ''; // decorate the property with @Input()
  @Input() wordIndex = ''; // decorate the property with @Input()

  checkoutForm = this.formBuilder.group({
    proposedTranslate: ''
  });

  constructor(private formBuilder: FormBuilder, private translateService: TranslateService) { }

  checkTranslate(){}

  translateWord(stringToTranslate: string): void {
    this.translateService.postTranslate(stringToTranslate)
      .subscribe(elem => {
        console.log(elem);
      })
  }

  onSubmit(): void {
    //console.log(typeof this.checkoutForm.value.proposedTranslate);
    this.translateWord(this.checkoutForm.value.proposedTranslate!)
  }

  ngOnInit(): void {
  }

}
