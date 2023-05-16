import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import sort from '../../components/Button/sort';
import * as S from './styled';

function Main() {
  return (
    <S.Container>
      <S.MainWapper>
        <div>리스트만들기</div>
        <Button>
          <Link to='/list'>리스트</Link>
        </Button>
      </S.MainWapper>
    </S.Container>
  );
}
export default Main;
