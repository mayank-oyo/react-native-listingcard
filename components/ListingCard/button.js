import React from 'react';
import { Button } from 'react-native';

const ButtonComp = props => {
  const { theme } = props;
  console.log(props);
  return <Button className={theme} type="button" >{props.children}</Button>;
};

export default ButtonComp;
