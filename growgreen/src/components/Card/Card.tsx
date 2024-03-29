import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Card.Style';
import { CardType } from '../../types';

function Card({ url, thumbnail, category, title }: CardType) {
  return (
    <S.Card>
      <Link to={url}>
        <S.ImgWrap>
          <img src={thumbnail} alt="thumb-img" />
        </S.ImgWrap>
        <S.TextWrap>
          <S.Category>{category}</S.Category>
          <S.Title>{title}</S.Title>
        </S.TextWrap>
      </Link>
    </S.Card>
  );
}

export default Card;
