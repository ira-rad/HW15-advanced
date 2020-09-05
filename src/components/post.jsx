import React from 'react';
import Footer from './footer'
import '../reset.css';
import './style.css';
import  coment from './img/comment.svg'
import like from './img/like.svg'
import repost from './img/repost.svg'
import share from './img/share.svg'
import arrow from './img/arrow.svg'

 

let footer = [
    {
        image: coment,
        number: 482
    },
    {
        image: repost,
        number: 146
    },
    {
        image: like,
        number: 887
    },
    {
        image: share,
    },
   
];
let postFooter = footer.map((el) => (
    <Footer 
    image = {el.image}
    number = {el.number}/>
))

const Post = (key) => {
    return(
        <div className = 'wrapper'>
           <div className="photo__container">
           <img className='main-photo' alt='avatar' src={key.author.photo}/>
           </div>
            <div className = 'about-user'>
               <div className ='user-info'>
    <p className ='user-date'> <span className='name txt'>{key.author.name}</span> {key.author.nickname} · {key.date} </p>
                   <img className='arrow' src={arrow} alt=""/>
                </div>    
                <p className='content txt'>{key.content}</p>
                <div className="post-img"> 
                    <img className ='user-post' alt ='post' src={key.image}/>
                </div>
                <div className ="post__footer"> {postFooter}</div>

           </div>
                

            </div>
        
    )
}


export default Post
