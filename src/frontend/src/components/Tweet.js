import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import moment from 'moment';
import io from 'socket.io-client';

import LikeService from '../services/LikeService';
import Coment from '../components/Coment';

import '../styles/Tweet.css';

import DeleteIcon from '../assets/Delete.png';
import LikeIcon from '../assets/Like.png';
import ComentIcon from '../assets/Coment.png';

function Tweet({ tweet, socket }) {
    
    const [coment, setComent] = useState(false);
    const [TweetContent, setTweetContent] = useState(tweet);

    async function likeTweet() {
        await LikeService.createLike(tweet._id);
    }

    // useEffect( () => {
    //     socket.on('Like', data => {
    //         // setTweetContent(tweet._id === data._id ? {likes: 10} : tweet)
    //         // console.log(data);
    //     });
    // }, []);
    
    function comentTweet() {
        if(coment) {
            setComent(false);
        } else {
            setComent(true);
        }
    }

    function deleteTweet() {
        console.log("DELETE");
    }

    return(
      <>
        <div className="tweet">
            
            <div className="tweetContent">
                
                <div className="avatar">
                    <img src={ tweet.thumbnail_url } alt=""/>
                </div>

                <div className="text">
                    
                    <p className="author">
                        { TweetContent.author }
                    </p>

                    <p className="postTweet">
                        { TweetContent.content }
                    </p>

                    <p className="information">
                        <p className="likes">
                            { TweetContent.likes } likes
                        </p>
                        
                        <p className="coments">
                            { Object.keys(TweetContent.coments).length } coments
                        </p>

                        <p className="date">
                            { moment(TweetContent.createdAt).format('MMM Do, YYYY. h:mm a') }
                        </p>
                    </p>
                </div>

            </div>
        
            <div className="options">
                <a onClick = { likeTweet }>
                    <img src={ LikeIcon } alt="Likeee <3"/>
                </a>

                <a onClick = { comentTweet }>
                    <img src={ ComentIcon } alt="Coment ;)"/>
                </a>

                <a onClick = { deleteTweet } >
                    <img src={ DeleteIcon } alt="Delete tweet"/>
                </a>
            </div>        
        </div>

        <CSSTransition
            in = { coment }
            timeout ={ 500 }
            classNames = "transition"
            unmountOnExit
            appear>
            
            <Coment idTweet = {tweet._id} />
        
        </CSSTransition>
      </>
    );
}

export default Tweet;