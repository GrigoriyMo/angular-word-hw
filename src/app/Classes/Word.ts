

export class Word {
    public rus: string;
    public eng: string;
    public proposedRus: string | undefined;
    
    constructor(
         eng: string
    ) {
        
        this.rus = ''
        this.eng = eng
    };

    setRusTranslate(translation: any) {
        this.rus = translation.data.translations[0].translatedText.toLowerCase();
    }
}
