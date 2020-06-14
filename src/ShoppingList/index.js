import React from 'react';

export const ShoppingList = ({ shoppingList }) => {
    return (
        <ul>
            {
                shoppingList.map(shopping => {
                    return (
                        <li key={shopping.id}>
                            <label>
                                <input type="checkbox" value={shopping.id} checked={shopping.done} />
                                {shopping.title}
                            </label>
                        </li>
                    )
                })
            }
            
        </ul>
    )
}
