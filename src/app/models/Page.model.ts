import Story from './Story.model';

export default class Page{
    stories?:Array<Story>
    curPage?:number
    resultCount?:number
    pageSize?:number
}