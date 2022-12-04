

export class Word {
    public rus: string;
    public proposedRus: string | undefined;
    
    constructor(
        public eng: string
    ) {
        this.rus = ''
        this.eng = eng
    };

    setRusTranslate(translation: any) {
        this.rus = translation.data.translations[0].translatedText.toLowerCase();
    }
}
