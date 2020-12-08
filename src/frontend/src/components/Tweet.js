import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import moment from 'moment';

import LikeService from '../services/LikeService';
import Coment from '../components/Coment';

import '../styles/Tweet.css';

import LikeIcon from '../assets/Like.png';
import ComentIcon from '../assets/Coment.png';

function Tweet({ tweet }) {
    
    const [coment, setComent] = useState(false);
    const [TweetContent, setTweetContent] = useState(tweet);

    async function likeTweet() {
        await LikeService.createLike(TweetContent._id);
    }

    function comentTweet() {
        if(coment) {
            setComent(false);
        } else {
            setComent(true);
        }
    }

    return(
      <>
        <div className="tweet">
            
            <div className="tweetContent">
                
                <div className="avatar">
                    <img src={ "data:image/png;base64,"+TweetContent.thumbnail } alt=""/>
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

            </div>        
        </div>

        <CSSTransition
            in = { coment }
            timeout ={ 500 }
            classNames = "transition"
            unmountOnExit
            appear>
            
            <Coment idTweet = {TweetContent._id} />
        
        </CSSTransition>
      </>
    );
}

export default Tweet;