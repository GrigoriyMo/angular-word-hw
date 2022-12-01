
export class Word {
    public rus: string;
    public eng: string;
    public inVocabulary: boolean;

    constructor (
        public word: any
    ) {
        this.rus = word.rus;
        this.eng = word.eng
        this.inVocabulary = false;
    };
}
