import React from 'react';
import { TextField } from '@material-ui/core';

import { styled } from '../styles';

import { IFormComponent, withFormField } from './withFormField';
import { inputStyles } from './Input';

const Wrapper = styled.div<IFormComponent>`
  ${inputStyles};
  width: 94%;
  margin-top: 4px;
`;

type ITextAreaProps = IDatePickerProps & IFormComponent;

interface IDatePickerProps {
  label?: string;
  defaultValue?: string;
}

const DatePicker: React.FC<ITextAreaProps> = props => {
  const { label, defaultValue } = props;
  return (
    <Wrapper {...props}>
      <TextField id='date' label={label} type='date' defaultValue={defaultValue}/>
    </Wrapper>
  );
};

export const DatePickerField = withFormField(DatePicker);
