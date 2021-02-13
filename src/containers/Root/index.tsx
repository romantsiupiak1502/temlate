import React from 'react';
import { useSelector } from "react-redux";
import { IStore } from "store/types";

import { AuthorizedRoot } from "./AuthorizedRoot";
import { UnauthorizedRoot } from "./UnauthorizedRoot";

export const Root = () => {
  const { isLoggedIn } = useSelector((state: IStore) => state.auth);

  return (
    <>
      { isLoggedIn ? (
        <AuthorizedRoot/>
      ) : (
        <UnauthorizedRoot/>
      ) }
      <div id="modals"/>
    </>
  );
};
