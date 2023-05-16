import React, { useState } from 'react';
import Button from '../../components/Button';
import sort from '../../components/Button/sort';
import * as S from './styled';
const SortableList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: '권준',
      level: 2,
    },
    {
      id: 2,
      name: '김규민',
      level: 1,
    },
    {
      id: 3,
      name: '김민찬',
      level: 5,
    },
    {
      id: 4,
      name: '문찬영',
      level: 4,
    },
    {
      id: 5,
      name: '박신호',
      level: 2,
    },
    {
      id: 6,
      name: '박종혁',
      level: 5,
    },
    {
      id: 7,
      name: '박현우',
      level: 1,
    },
    {
      id: 8,
      name: '서하늘',
      level: 4,
    },
    {
      id: 9,
      name: '이재원',
      level: 4,
    },
    {
      id: 10,
      name: '임준건',
      level: 5,
    },
    {
      id: 11,
      name: '장민우',
      level: 5,
    },
    {
      id: 12,
      name: '전민수',
      level: 2,
    },
    {
      id: 13,
      name: '전찬하',
      level: 2,
    },
    {
      id: 14,
      name: '정민건',
      level: 1,
    },
    {
      id: 15,
      name: '정유권',
      level: 5,
    },
    {
      id: 16,
      name: '조수빈',
      level: 3,
    },
    {
      id: 17,
      name: '하승수',
      level: 5,
    },
    {
      id: 18,
      name: '박형진',
      level: undefined,
    },
  ]);

  // ID를 기준으로 항목을 오름차순으로 정렬합니다.
  const sortedItems = [...items].sort((a, b) => a.id - b.id);

  return (
    <div>
      <S.Title>정렬 가능한 리스트</S.Title>
      <S.Container>
        {sortedItems.map(item => (
          <S.li key={item.id}>{item.name}</S.li>
        ))}
        <S.Container2>
          <Button>아이디순으로 내림차순</Button>
          <Button>레벨 오름차순</Button>
        </S.Container2>
      </S.Container>
    </div>
  );
};

export default SortableList;
