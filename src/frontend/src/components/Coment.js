import React, { useState, useEffect } from 'react';
import moment from 'moment';

import ComentService from '../services/ComentService';

import '../styles/Coment.css';

function Coment({ idTweet }) {
  
  const [coments, setComents] = useState([]);
  const [newComent, setNewComent] = useState([]);
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  function inputChange(event) {
    setNewComent(event.target.value);
  }

  function submit(event) {
    if(event.keyCode === 13) {
      const author = sessionStorage.getItem('@TwittaDEV:name');
      const thumbnail_url = sessionStorage.getItem('@TwittaDEV:thumbnail');
      ComentService.createComent(idTweet, newComent, user.name, user.thumbnail).then(() => setNewComent(''));
    }
  }

  useEffect(() => {
      ComentService.showComents(idTweet).then(async list => {
        await setComents(list.data);
      })
  }, [idTweet]);

  return(
    <>
    <div className="listComents">

      <div className="ownComents">
        {coments.map(cmt => 
          
          <div className="comentContent">
            
            <div className="avatar">
              <img src={ "data:image/png;base64,"+cmt.thumbnail } alt=""/>
            </div>

            <div className="text">
                    
              <p className="author">
                  { cmt.author+', ' }
                  { moment(cmt.createdAt).format('MMM Do') }
              </p>

              <p className="post">
                  { cmt.content }
              </p>

              <hr/>

            </div>   
          </div>
        )}
      </div>
      
      <div className="newComent">
        <input 
          type="text" 
          placeholder="add new coment"
          onChange = { inputChange }
          value = { newComent }
          onKeyDown = { submit }/>
      </div>
    
    </div>
    
    </>
  );
}

export default Coment;