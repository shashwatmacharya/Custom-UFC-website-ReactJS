import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Sign-up to buy the UFC 288 Pay-Per-View</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' >
            <CardItem
              src='images/mainevent2.jpg'
              text='The Champion Aljamain Sterling defends the Bantamweight belt against on Henry Cejudo !'
              label='Main Event'
              path='/services'
            />
            <CardItem
              src='images/comainevent.jpg'
              text='Charles Olivera fights Beneil Dariush for the No.1 contenders spot in the Lightweight Division'
              label='Co-Main Event'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ufc288whole.jpeg'
              text='Buy UFC 288 Here'
              label='The lastest PPV'
              path='/products'
            />
            <CardItem
              src='images/ufclogo.jpg'
              text='Check out all the UFC merch!'
              label='Merchandise'
              path='/products'
            />
            <CardItem
              src='images/espn.jpg'
              text='Sign-in to ESPN buy the UFC FightPass to get access to the whole years Pay-Per-View'
              label='Sign-up'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
