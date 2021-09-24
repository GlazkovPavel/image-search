import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../image/not_found.png'

export function PageNotFound () {
  return (
      <div className="not-found">
        <img className="not-found__image" src={notFoundImage} alt="Not Found"/>
        <h3 className="not-found__title">
          <span>404</span> - Страница не найдена
        </h3>
        <p className="not-found__text">
          Ой, здесь ничего нет
        </p>
        <Link className="not-found__button" to="/">⟵ Назад</Link>
      </div>
  )
};