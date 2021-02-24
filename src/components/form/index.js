import React from 'react';
import { Container, Base, Input, Submit, Link, Error, Text, TextSmall, Title } from './styles/form';

const Form = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
};

Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
};

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>
};

Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>
};

Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Form.Link = function FormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
};

Form.Input = function FormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
};

export default Form;