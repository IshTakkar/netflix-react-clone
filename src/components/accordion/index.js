import React, { useState, useContext, createContext } from 'react';
import { Container, Title, Inner, Item, Header, Body } from './styles/accordion';

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}


Accordion.Item = function AccordionItem({ children, ...restProps }) {

    const [showToggle, setShowToggle] = useState(false);

    return (
        <ToggleContext.Provider value={{showToggle, setShowToggle}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {

    const { showToggle, setShowToggle } = useContext(ToggleContext);
    return (
        <Header
            onClick={() => setShowToggle((showToggle) => !showToggle)}
            {...restProps}>
            {children} {showToggle ? (<img src="/images/icons/close-slim.png" alt="Close"/>) : (<img src="/images/icons/add.png" alt="Open" />)}
        </Header>
    );
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { showToggle } = useContext(ToggleContext);
    return showToggle ? <Body {...restProps}>{children}</Body> : null;
}

export default Accordion;