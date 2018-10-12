import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchPoem from './Search_poem';
import Poem from './Poem';
const PoemList = () => (
  <div>
    <Header />
    <SearchPoem />
    <Poem />
    <Footer />
  </div>
)

export default PoemList;