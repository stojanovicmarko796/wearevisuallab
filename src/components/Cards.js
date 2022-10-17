import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
      <div className='cards'>
        <h1>Check out our projects!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={require('../images/img-9.jpg')}
                text='Project 1 - our first project'
                label='Adventure'
                path='/projects'
              />
              <CardItem
                src={require('../images/img-7.jpg')}
                text='Project 2 done in serbia'
                label='Luxury'
                path='/projects'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src={require('../images/img-3.jpg')}
                text='Project 3 - in belgrade'
                label='Mystery'
                path='/projects'
              />
              <CardItem
                src={require('../images/img-4.jpg')}
                text='Project 4 - having fun'
                label='Adventure'
                path='/ourTeam'
              />
              <CardItem
                src={require('../images/img-8.jpg')}
                text='Project 5 - adrenaline junky'
                label='Adrenaline'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Cards;
