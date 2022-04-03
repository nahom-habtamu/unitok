import React from 'react';

const AuthorAsset = () => {
    return (
      <ul class="asset__authors">
        <li>
          <span>Creator</span>
          <div class="asset__author asset__author--verified">
            <img src="img/avatars/avatar5.jpg" alt=""/>
            <a href="author.html">@midinh</a>
          </div>
        </li>
        <li>
          <span>Collection</span>
          <div class="asset__author ">
            <img src="img/avatars/avatar9.jpg" alt=""/>
            <a href="collection.html">The Meta Key</a>
          </div>
        </li>
      </ul>
    );
}
  
export default AuthorAsset;