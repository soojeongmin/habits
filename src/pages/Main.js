import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
    font-weight: normal;
`;

const Part = styled.span`
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: gray;
    }
`;

const Main = () => {
    const [activePart, setActivePart] = useState(null);
    const navigate = useNavigate();

    const handleClick = (part) => {
        setActivePart(part);
        switch (part) {
            case '羽':
                navigate('/study');
                break;
            case '白':
                navigate('/white');
                break;
            case '心':
                navigate('/heart');
                break;
            case '貫':
                navigate('/trace');
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Title>
                <Part
                    active={activePart === '羽'}
                    onClick={() => handleClick('羽')}
                >
                    羽
                </Part>
                <Part
                    active={activePart === '白'}
                    onClick={() => handleClick('白')}
                >
                    白
                </Part>
                <Part
                    active={activePart === '心'}
                    onClick={() => handleClick('心')}
                >
                    心
                </Part>
                <Part
                    active={activePart === '貫'}
                    onClick={() => handleClick('貫')}
                >
                    貫
                </Part>
            </Title>
        </>
    );
};

export default Main;
