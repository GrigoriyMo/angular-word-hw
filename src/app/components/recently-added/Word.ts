
export class Word {
    public rus: string;
    public eng: string;

    constructor (
        public word: any
    ) {
        this.rus = word.rus;
        this.eng = word.eng
    };
}
