import React from 'react';
import { MdSmokeFree } from '../../components';

import {IconButton} from "../../components";

export const UnauthorizedRoot: React.FC = () => {
  return (
    <>
      <IconButton text='Do not Smoke' icon={ () => <MdSmokeFree size={'25px'}/>} onClick={()=>{}}/>
    </>
  );
};
