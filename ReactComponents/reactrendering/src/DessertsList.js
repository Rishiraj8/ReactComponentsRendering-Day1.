// DessertsList.js

import React from 'react';

const DessertsList = () => {
  const dessertData = [
    { dessertName: 'Ice Cream', calories: 200 },
    { dessertName: 'Tiramisu', calories: 300 },
    { dessertName: 'Chocolate Cake', calories: 400 },
    { dessertName: 'Cheesecake Supreme', calories: 600 },
  ];

  const filteredDesserts = dessertData.filter(dessert => dessert.calories < 500);
  const sortedDesserts = filteredDesserts.sort((a, b) => a.calories - b.calories);

  return (
    <div>
      <h2>Desserts with Less than 500 Calories</h2>
      <ul>
        {sortedDesserts.map(dessert => (
          <li key={dessert.name}>
            {`${dessert.dessertName} - ${dessert.calories} cal`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DessertsList;
