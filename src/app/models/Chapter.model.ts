import Content from './Content.model';

export default class Chapter{
    id?:number
    title?:string
    contents?:Array<Content>
    creationDate?:number
    isPublished?:boolean
    
}