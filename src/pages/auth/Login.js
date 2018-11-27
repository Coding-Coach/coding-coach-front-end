import React from 'react';
import { Trans } from '@lingui/macro';
import { noop } from 'utils/noop';

import Button from 'components/button/Button';
import TextField from 'components/textfield/TextField';
import { Panel, PanelContent } from 'components/panel/Panel';

import { ReactComponent as Logo } from '../home/assets/images/coding-coach-logo.svg';

export default function Login() {
  return (
    <div className="h-screen bg-gradient-primary py-3">
      <div className="container">
        <div className="flex justify-between mb-12">
          <Logo className="w-12 h-8" />
          <Button onClick={noop} shape="pill" size="small" typography="none">
            Sign up
          </Button>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <div className="px-2 md:w-3/5 lg:w-1/3">
            <h1 className="text-white font-semibold mb-2">
              <Trans id="site.title" defaults="Coding Coach" />
            </h1>
            <p className="text-white font-sm w-3/4 mb-8">
              Sign in or create a new account to get started.
            </p>
            <Panel floating>
              <PanelContent>
                <h2 className="text-xl font-semibold text-primary mb-4">Sign In</h2>
                <TextField label="Email Address" name="email" />
                <TextField label="Password" name="password" type="password" />
                <Button onClick={noop} size="small" typography="none" fullWidth>
                  Let's go!
                </Button>
              </PanelContent>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}
