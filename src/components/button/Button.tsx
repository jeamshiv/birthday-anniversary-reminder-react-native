import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonType } from '../../types/commonInterface';


type Props = {
  text: string;
  type?: ButtonType;
  onPressEvent: any;
};

const Button = (props: Props) => {
  const onPressEventFire = () => {
    // if (props.redirection !== null) {
    //   navigation.navigate(props.redirection);
    // } else {
    props.onPressEvent();
    // }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={e => onPressEventFire()}
      className={`
        ${props.type === "primary" ? "bg-primary" : props.type === "secondary" ? "bg-secondary" : props.type === "primary_outline" ? "border-2 border-primary" : props.type === "secondary_outline" ? "border-2 border-secondary" : "bg-transparent"}
        py-4 px-5 rounded-xl`
      }>
      <Text className={`
      ${props.type === "primary" ? "text-white" : props.type === "secondary" ? "text-white" : props.type === "primary_link" ? "text-primary" : props.type === "secondary_link" ? "text-secondary" : props.type === "primary_outline" ? "text-primary" : props.type === "secondary_outline" ? "text-secondary" : "text-black"}
      text-center text-xl font-poppins-semibold`
      }>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
