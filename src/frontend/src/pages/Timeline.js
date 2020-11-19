import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Navbar from '../components/Navbar';
import Tweet from '../components/Tweet';

import TweetService from '../services/TweetService';

import '../styles/Timeline.css';

function Timeline() {

  const [NewTweet, setNewTweet] = useState([]);
  const [Tweets, setTweets] = useState([]);
  const [thumbnail_url, setThumbnail_url] = useState('');

  const socket = io('http://localhost:3333');
  socket.emit('connect', socket.id);

  function inputChange(event) {
    setNewTweet(event.target.value);
  }

  function submit(event) {
    if((NewTweet !== '') && (event.keyCode === 13 || event.type === 'click')) {
      const author = sessionStorage.getItem('@TwittaDEV:name');
      TweetService.create(NewTweet, author, thumbnail_url).then(() => setNewTweet(''));
    }
  }
  
  useEffect(() => {
    TweetService.show().then(async list => {
      await setTweets(list.data);
    });
  }, []);

  useEffect(() => {
    setThumbnail_url(sessionStorage.getItem('@TwittaDEV:thumbnail'));
    
    socket.on('Tweet', data => {
      setTweets([data, ...Tweets]);
    });

    socket.on('Like', data => {
      setTweets(Tweets.map(tw => ( tw._id === data._id ? {...tw, likes: data.likes} : tw )))
      // console.log(data);
    });

    socket.on('NewComent', data => {
      setTweets(Tweets.map(tw => ( tw._id === data._id ? {...tw, coments: data.coments} : tw )))
      // console.log(data);
    });
   
  }, [Tweets]);

  return(
      <>
        <div className="navbar">
          <Navbar />
        </div>

        <div className="timeline">
          
          <div className="header">

            <div className="user">
              
              <div className="logo">
                <img src={ thumbnail_url } alt=""/>
              </div>

              <div className="username">
                <p>Hi, {sessionStorage.getItem('@TwittaDEV:name')}</p>
              </div>
              
            </div>
          
            <div className="newPost">

              <textarea
                value = { NewTweet }
                onChange = { inputChange }
                onKeyDown = { submit }
                placeholder = 'what do you are thinking about?'
                name=""
                id="" 
                cols="30" 
                rows="10" 
              />
                
              <div className="buttonNewPost">
                <button onClick = { submit } >New Post</button>
              </div>

            </div>
          </div>
            
          <div className="tweets">
            { Tweets.map( tw =>  <Tweet key = { tw._id } tweet = { tw } socket={ socket }/> ) }
          </div>

        </div>
      </>
  );
}

export default Timeline;