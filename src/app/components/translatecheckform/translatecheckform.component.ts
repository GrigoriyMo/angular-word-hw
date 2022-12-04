import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '../../services/translate/translate.service'
import { Word } from '../../Classes/Word'
import { WordsList } from '../../Classes/WordsList'

@Component({
  selector: 'app-translatecheckform',
  templateUrl: './translatecheckform.component.html',
  styleUrls: ['./translatecheckform.component.css'],
  providers: [TranslateService]
})

export class TranslatecheckformComponent implements OnInit {
  @Input() engWord = ''; // decorate the property with @Input()
  @Input() wordIndex = ''; // decorate the property with @Input()

  @Output()
  change :EventEmitter<WordsList> = new EventEmitter<WordsList>();
  
  word: any;

  checkoutForm = this.formBuilder.group({
    proposedTranslate: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,

  ) {

  }

  checkTranslate(proposedTranslate: string, realTranslate: any): boolean {
    let checkResult: boolean = false;

    if (proposedTranslate.toLowerCase() == realTranslate.data.translations[0].translatedText.toLowerCase()) {
      checkResult = true;
    }

    return checkResult;
  }

  translateWord(stringToTranslate: string): void {
    this.translateService.postTranslate(stringToTranslate)
      .subscribe(elem => {

        if (
          this.checkTranslate(this.checkoutForm.value.proposedTranslate!, elem)
        ) {

          this.word.setRusTranslate(elem);
          this.change.emit(this.word);
          alert('Правильный перевод, слово добавлено в словарь')
        } else {
          alert('Неправильный перевод')
        }
      })
  }

  onSubmit(): void {
    this.translateWord(this.engWord)
  }

  ngOnInit(): void {
    this.word = new Word(this.engWord);
  }

}
