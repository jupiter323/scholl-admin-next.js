import styled from 'styled-components';

const SelectedUserRowWrapper = styled.div`
  background-color: #31837a;
  color: #fff;
  .user-circle {
    background-color: #31837a;
    color: #fff;
  }
  :hover {
    cursor: pointer;
    background-color: #24645c!important;
    .user-circle {
      background-color: #24645c!important;
    }
  }
`;

export default SelectedUserRowWrapper;
