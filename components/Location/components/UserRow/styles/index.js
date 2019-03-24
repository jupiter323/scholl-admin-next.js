import styled from 'styled-components';

const UserRowWrapper = styled.div`
  background-color: ${({ selected }) => selected ? '#24645c' : '#31837a'};
  color: #fff;
  .user-circle {
    background-color: ${({ selected }) => selected ? '#24645c' : '#31837a'};
    color: #fff;
  }
  :hover {
    cursor: pointer;
    background-color: ${({ selected }) => selected ? '#004a40!important' : '#24645c!important'};
    .user-circle {
      background-color: ${({ selected }) => selected ? '#004a40!important' : '#24645c!important'};
    }
  }
`;

export default UserRowWrapper;
