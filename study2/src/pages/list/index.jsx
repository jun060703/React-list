import React, { useState } from 'react';
import * as S from './styled';
import { memberList } from '../../constans/member-list';
function List() {
  const [list, setList] = useState(memberList);

  const sortAscById = () => {
    setList(prevState => {
      return [...prevState].sort((a, b) => a.id - b.id);
    });
  };
  const sortDescById = () => {
    setList(prevState => {
      return [...prevState].sort((a, b) => b.id - a.id);
    });
  };
  const sortAscName = () => {
    setList(prevState => {
      return [...prevState].sort((a, b) => (b.name < a.name ? 1 : -1));
    });
  };
  const sortDescByName = () => {
    setList(prevState => {
      return [...prevState].sort((a, b) => (a.name < b.name ? 1 : -1));
    });
  };
  const sortAscByLevel = () => {
    setList(prevState => {
      return [...prevState].sort((a, b) => {
        if (a.level === b.level) return 0;
        if (!a.level) return -1;
        return b.level < a.level ? 1 : -1;
      });
    });
  };

  return (
    <S.Container>
      <S.Button onClick={sortAscById}>id정렬</S.Button>
      <S.Button onClick={sortDescById}>id내림정렬</S.Button>
      <S.Button onClick={sortAscName}>name정렬</S.Button>
      <S.Button onClick={sortDescByName}>내림name정렬</S.Button>
      <S.Button onClick={sortAscByLevel}>level정렬</S.Button>
      <S.ListBox>
        <S.ListItem>
          <S.Desc>id</S.Desc>
          <S.Desc>name</S.Desc>
          <S.Desc>level</S.Desc>
        </S.ListItem>
        {list.map(({ id, name, level }) => {
          return (
            <S.ListItem key={id}>
              <S.Desc>{id}</S.Desc>
              <S.Desc>{name}</S.Desc>
              <S.Desc>{level || '없음'}</S.Desc>
            </S.ListItem>
          );
        })}
      </S.ListBox>
    </S.Container>
  );
}

export default List;
