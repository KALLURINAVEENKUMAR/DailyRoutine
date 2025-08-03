import logo from './logo.svg';

import React, { useState } from 'react';
import './App.css';

const ironData = [
   { item: 'Eggs', usefulness: 'Heme iron + hair support', how: 'Main Asala (yolk only 2 tinu), white yenni tinna parla' },
  { item: 'Dry Dates (Khajur)', usefulness: 'Iron ekkuva untundi', how: '2–3 tinu every morning, empty stomach aina better' },
  { item: 'Roasted Chana', usefulness: 'Iron + protein', how: 'Niku kali unnapudu tinu, rojuki 1 sari snack ga' },
  { item: 'Ragi Biscuits', usefulness: 'Iron + calcium', how: 'Tea tho or breakfast lo tinu' },
  { item: 'Spinach (Palak)', usefulness: 'Iron rich leafy veg', how: 'PG lo ee curry chesthe pakka tinu' },
  { item: 'Beetroot', usefulness: 'Blood levels penchutundi', how: 'Istamaithe tinu' },
  { item: 'Jaggery (Bellam)', usefulness: 'Natural iron source', how: 'Rojuki 1 spoon — milk or snack tarvata' },
  { item: 'Fortified Cornflakes', usefulness: 'Iron rich breakfast option', how: 'Milk tho morning lo tinu' },
  { item: 'Rajma / Chole', usefulness: 'Iron + protein combo', how: 'PG lo ee curry chesthe pakka tinu' },
  { item: 'Pumpkin Seeds', usefulness: 'Iron + zinc', how: 'Curd or oats mida sprinkle cheyachu / Uttavi ayna tinochhu(kakapothe taste nachhadhu niku )' },
  { item: 'Paneer', usefulness: 'Protein for hair strength', how: 'Bayataki vellinappudu kudirthe tinu' },
  { item: 'Amla Juice / Tablet', usefulness: 'Vitamin C — iron absorb kosam', how: 'Morning lo tinu, dates tho vadachu' },
];

const periodData = [
  { item: 'Banana', usefulness: 'Cramps thaggutayi', how: '1–2 fruits tinu period time lo daily' },
  { item: 'Dark Chocolate (70%)', usefulness: 'Mood boost + magnesium', how: 'Small piece tinu — craving vaste better' },
  { item: 'Chamomile / Ginger Tea', usefulness: 'Relax cheyadam, cramps ki', how: 'Evening lo sip chey, stress relief kosam' },
  { item: 'Coconut Water', usefulness: 'Hydration + minerals', how: 'Morning lo 1 glass — fresh or tetra pack' },
  { item: 'Curd / Yogurt', usefulness: 'Cool cheyadam, digestion', how: 'Lunch or dinner tho tinu, plain better' },
  { item: 'Papaya (ripe)', usefulness: 'Flow regulate cheyadam', how: '2–3 slices, not too much' },
  { item: 'Boiled Eggs', usefulness: 'Energy + protein', how: 'Breakfast or snack ga 1–2 eggs' },
  { item: 'Oats / Muesli', usefulness: 'Fiber + cramps reduce', how: 'Overnight oats or simple oats prepare cheyachu' },
  { item: 'Sweet Potato', usefulness: 'Bloating thaggutundi', how: 'Boil chesi salt tho tinu' },
  { item: 'Jeera Water', usefulness: 'Cramps ni calm chestundi', how: 'Morning 1 glass lukewarm jeera water' },
];

const shoppingData = [
  { category: 'Fruits', examples: 'Banana, Papaya, Amla juice pack' },
  { category: 'Dairy', examples: 'Curd cups, Paneer (small block)' },
  { category: 'Snacks', examples: 'Roasted chana, Pumpkin seeds, Chikki' },
  { category: 'Biscuits / Grains', examples: 'Ragi biscuits, Fortified cornflakes, Oats' },
  { category: 'Beverages', examples: 'Coconut water (tetra pack), Ginger tea' },
  { category: 'Protein', examples: 'Eggs (boiled pack), Rajma cans' },
  { category: 'Sweets (Natural)', examples: 'Jaggery, Dates, Dark chocolate (mini bar)' },
];

const tabs = [
  { label: 'Iron & Hair Growth', color: '#000000ff' },
  { label: 'Periods Care', color: '#f44f8f' },
  { label: 'Shopping List', color: '#1e3cc2ff' },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="app-bg">
      <header className="header">
        <h1>✨ Bhavyasriiiii ✨</h1>
        <h2>Ni Daily Routine💌</h2>
        <p>Follow avvakapooo anthe inka🫠</p>
        <div className="header-icons">🌸 🩸 🥗 💪 ✨</div>
      </header>
      <div className="tabs">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`tab-btn${activeTab === idx ? ' active' : ''}`}
            style={{ background: activeTab === idx ? tab.color : '#fff', color: activeTab === idx ? '#fff' : tab.color }}
            onClick={() => setActiveTab(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <main className="main-content">
        {activeTab === 0 && (
          <section>
            <div className="section-title-wrapper">
              <h2 className="section-title gradient-text">Iron Deficiency & Hair Growth – <span>Food Chart</span></h2>
            </div>
            <div className="table-container">
              <table className="food-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Usefulness</th>
                    <th>How to Use (PG lo)</th>
                  </tr>
                </thead>
                <tbody>
                  {ironData.map((row, i) => (
                    <tr key={i}>
                      <td><b>{row.item}</b></td>
                      <td>{row.usefulness}</td>
                      <td>{row.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
        {activeTab === 1 && (
          <section>
            <div className="section-title-wrapper">
              <h2 className="section-title gradient-text">Period Time Food List – <span>Cramps & Energy kosam</span></h2>
            </div>
            <div className="table-container">
              <table className="food-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Usefulness</th>
                    <th>How to Use (PG lo)</th>
                  </tr>
                </thead>
                <tbody>
                  {periodData.map((row, i) => (
                    <tr key={i}>
                      <td><b>{row.item}</b></td>
                      <td>{row.usefulness}</td>
                      <td>{row.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
        {activeTab === 2 && (
          <section>
            <div className="section-title-wrapper">
              <h2 className="section-title gradient-text">Instamart / Zepto / Blinkit lo koneyvachhu anukune Items</h2>
            </div>
            <div className="table-container">
              <table className="food-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingData.map((row, i) => (
                    <tr key={i}>
                      <td><b>{row.category}</b></td>
                      <td>{row.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
