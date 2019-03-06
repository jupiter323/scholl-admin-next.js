import styled from 'styled-components';

const DropdownWrapper = styled.div`
  padding: 5px 0;
  padding-right: ${({ padRight }) => padRight ? '20px' : ''};
  ${({ valid }) => !valid ?
    `div.select__control, div.expanded-select__control, div.multi-select__control { 
        border-color: #F44336!important; 
        &:focus {
          border-color: inherit;
      }
    }`
    : ''};
  &.flex-50 {
    flex-basis: 50%!important;
  }
`;

export const ControlWrapper = styled.div`
  p {
    padding-left: ${({ categoryCheck }) => categoryCheck ? '10px' : ''};
    margin-bottom: 5px;
    color: #959595;
    margin-top: ${({ categoryCheck }) => categoryCheck ? '20px' : ''};
  }
  ${({ invalid }) => invalid ?
    `div.multi-select__control {
      border-color: #F44336!important;
    }` : ''};
`;

export default DropdownWrapper;
