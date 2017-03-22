import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state={ text: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={'user@email.com'}
            label={'Email'}
            value={this.state.text}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <input
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
