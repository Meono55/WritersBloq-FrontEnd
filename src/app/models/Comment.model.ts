import User from './User.model';

export default class Comment{
    id?:number
    author?:User
    content?:string
    creationDate?:number
    isSpoiler?:boolean
}