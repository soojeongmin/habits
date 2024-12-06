import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
    font-weight: normal;
`;

const Bullet = styled.li`
    font-size: 1rem;
    text-align: left;
    font-weight: normal;
    list-style-type: circle;
    margin-left: 25px;
    margin-bottom: 20px;
`;

const List = styled.ul`
    font-size: 1rem;
    text-align: left;
    font-weight: normal;
    list-style-type: none;
    margin-bottom: 20px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ContentWrapper = styled.div`
    text-align: left;
    width: 300px;
`;

const White = () => {
    return (
        <>
            <Title>白</Title>
            <Container>
                <ContentWrapper>
                    <Bullet>희다</Bullet>
                    <List>뭘 비워볼까?</List>
                    <List>어떤 것을 '흰 채'로 둘 까?</List>
                </ContentWrapper>
            </Container>
        </>
    );
};

export default White;