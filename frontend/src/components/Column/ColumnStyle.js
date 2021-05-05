import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 8px;
  background-color: white;
  border: 3px solid lightgrey;
  border-radius: 2px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  > h1 {
    margin: 1% 5% 1%;
    padding: 10px;
  }
`;

export const List = styled.ul`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
flex-grow: 1;
min-height: 100px;
`;