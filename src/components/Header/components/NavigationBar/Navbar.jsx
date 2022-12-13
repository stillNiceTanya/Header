import React from 'react';

import './Navbar.css'

const Navbar = () => {
    let academyLists = [
        {id: 1,
        category: 'Вузы',},
        {id: 2,
        category: 'Колледжи',},
        {id: 3,
        category: 'Техникумы',},
        {id: 4,
        category: 'Училища',},
        {id: 5,
        category: 'Специальности',},
        {id: 6,
        category: 'Профессии',},
        {id: 7,
        category: 'Отзывы',},
        {id: 8,
        category: 'Учебным заведениям',},
        {id: 9,
        category: 'Тест на профориентацию',},
    ]
    return (
        <div>
            <ul>{academyLists.map(el=>(
                <li key={el.id}

                >{el.category}
                </li>
            ))}</ul>
        </div>
    );
}

export default Navbar;
