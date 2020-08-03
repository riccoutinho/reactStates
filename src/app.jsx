import React from 'react';
import ReactDOM from 'react-dom';
import News from './news/list';
import Item from './news/item';
 
ReactDOM.render(<News>
                  <Item content="North Korea's high-level talks with South Korea see a breakthrough"/>
                  <Item content="China, France Promise Cooperation on Climate, Security"/>
                </News>,
  document.getElementById('app'));