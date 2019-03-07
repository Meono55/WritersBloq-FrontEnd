import Content from './Content.model';

export default class Chapter{
    id?:number
    title?:string
    content?:Array<Content>
    creationDate?:number
    isPublished?:boolean

}