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

const Study = () => {
    return (
        <>
            <Title>羽</Title>
            <Container>
                <ContentWrapper>
                    <Bullet>익히다</Bullet>
                    <List>오늘은 뭘 익힐까?</List>
                    <List>어떤 걸 공부해볼까?</List>
                </ContentWrapper>
            </Container>
        </>
    );
};

export default Study;
