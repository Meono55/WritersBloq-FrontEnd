import User from './User.model';
import Chapter from './Chapter.model';
import Comment from './Comment.model';
import Tag from './Tag.model';

export default class Story{
    id?:number
    title?:string
    author?:User
    summary?:string
    chapters?:Array<Chapter>
    comments?:Array<Comment>
    tags?:Array<Tag>
    genre?:string
    creationDate?:number
    modifiedDate?:number
    bookCover?:string
    actualRating?:number
    possibleRating?:number
}