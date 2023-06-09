import styled from "styled-components";

export const FaqItemContainer = styled.div<{ isActive: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.8rem 2rem;
    border-bottom: 1px solid #E4E7ED4D;
    
    ${({ isActive }) => isActive ? `
        background: #011B40;
    ` : `
        > h4 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        > p {
            display: none;
        }
    `}

    @media (max-width: 600px) {
        padding: 1rem 0.5rem;
    }
`

export const FaqItemThumb = styled.label`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;

    @media (max-width: 600px) {
        h4 {
            font-size: 0.7rem;
        }
    }
`
