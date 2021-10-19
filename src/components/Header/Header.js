import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <ButtonTablet>
              <User size={24} />
            </ButtonTablet>
            <ButtonDesktopStack>
              <Button>
                SUBSCRIBE
              </Button>
              <LinkUser>
                Alredy a subscriber
              </LinkUser>
            </ButtonDesktopStack>   
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp}{
    background-color: var(--color-white);
    color: black;
    margin: 16px 120px;
  }
`;
const ButtonDesktopStack = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp}{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const LinkUser = styled.button`
  text-decoration: underline;
  font-style: italic;
  font-size: 14px;
`
const ButtonTablet = styled.button`
  display: inherit;
  @media ${QUERIES.laptopAndUp}{
    display: none;
  }
`

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.laptopAndUp}{
    margin-top: -64px;
    margin: -114px 120px 48px;
  }
`;

export default Header;
