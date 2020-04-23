import * as React from 'react';

import Logo from '../../images/babekulin-logo.png';
import { styProfile, styWrapper } from './styles';

function Profile() {
  return (
    <div css={styWrapper}>
      <div css={styProfile}>
        <img src={Logo} alt="babekulin logo" title="@babekulin.food" />
      </div>
      <h3>@babekulin.food</h3>

      <p>
        Hallo, #eatBabe! <br />
        Silakan pesan berbagai macam pilihan Frozen Food dari #BabeKulin melalui
      </p>
    </div>
  );
}

export default Profile;
