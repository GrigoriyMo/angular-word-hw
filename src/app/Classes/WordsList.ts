import { Word } from './Word'

export class WordsList {
    private list: Array<Word>;

    constructor() {
        this.list = [];
    }

    pushList(data: any) {
        this.list.push(new Word(data.word.toLowerCase()))
    }

    getList() {
        return this.list;
    }
}