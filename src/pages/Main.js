import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    margin: 0 auto;
`;

const Part = styled.img`
    position: absolute;
    width: 120px;
    height: auto;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <Title>
            <Part
                src="/images/Kanji/study.svg"
                alt="Study"
                style={{ top: '60px', left: '120px' }}
                onClick={() => handleClick('/study')}
            />
            <Part
                src="/images/Kanji/white.svg"
                alt="White"
                style={{ top: '65px', left: '120px' }}
                onClick={() => handleClick('/white')}
            />
            <Part
                src="/images/Kanji/heart.svg"
                alt="Heart"
                style={{ top: '60px', left: '150px' }}
                onClick={() => handleClick('/heart')}
            />
            <Part
                src="/images/Kanji/trace.svg"
                alt="Trace"
                style={{ top: '60px', left: '160px' }}
                onClick={() => handleClick('/trace')}
            />
        </Title>
    );
};

export default Main;
