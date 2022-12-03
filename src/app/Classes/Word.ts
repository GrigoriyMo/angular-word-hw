
export class Word {
    public rus: string;
    public proposedRus: string | undefined;
    
    constructor(
        public eng: string
    ) {
        this.rus = ''
        this.eng = eng
    };

    setRusTranslate(translation: string) {
        this.rus = translation;
    }
}
