import { Word } from './Word'

export class WordsList {
    private list: Array<Word>;

    constructor() {
        this.list = [];
    }

    pushList(data: Word) {
        this.list.push(data)
    }

    getList() {
        if( localStorage.getItem('learnedWords')){
            return this.list = JSON.parse(localStorage.getItem('learnedWords')!);
        }else{
            return this.list;
        }
        
    }

    saveList(){
        localStorage.removeItem('learnedWords');
        localStorage.setItem('learnedWords',JSON.stringify(this.list));
    }

    resetList(){
        this.list = [];
        localStorage.removeItem('learnedWords');
    }
}