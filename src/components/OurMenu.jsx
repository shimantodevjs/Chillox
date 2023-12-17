import { useEffect, useState } from 'react';
import { fetchMenu } from '../api';

const OurMenu = () => {
  const [burgerMenu, setBurgerMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchMenu();
        console.log('API Response:', result);
        const jsonData = JSON.parse(result);

        // Check if the parsed data is an array before setting the state
        if (Array.isArray(jsonData)) {
          setBurgerMenu(jsonData);
        } else {
          console.error('Invalid menu data:', jsonData);
        }
      } catch (error) {
        console.error('Error fetching menu:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='section-header'>Our Menu</h1>
      <ul>
        {Array.isArray(burgerMenu) &&
          burgerMenu.map((burger, index) => <li key={index}>{burger.name}</li>)}
      </ul>
    </div>
  );
};

export default OurMenu;
