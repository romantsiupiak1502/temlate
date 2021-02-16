import React from 'react';
import { IconButton, NoSmokeIcon } from '../../components';

export const UnauthorizedRoot: React.FC = () => {
  return (
    <>
      <IconButton text='Do not Smoke' icon={<NoSmokeIcon size={'25px'}/>} onClick={()=>{}}/>
    </>
  );
};

