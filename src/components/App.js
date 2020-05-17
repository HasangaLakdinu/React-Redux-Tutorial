import React from 'react';
import ButtonComponent from './ButtonComponent';
import PostList from './PostList';
import SelectedPost from './SelectedPost'

import '../App.css';

function App() {
  return (
    <div className="App">
   <h2>hi</h2>
   <ButtonComponent/>
   <br>
   </br>
   <PostList/>
   <br></br>
   <SelectedPost/>
    </div>
  );
}

export default App;
