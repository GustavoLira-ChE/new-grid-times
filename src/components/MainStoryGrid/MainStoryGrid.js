import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --paddingSection: 16px;
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 16px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletOnly}{
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'main-story main-story secondary-stories'
      'advertisement advertisement advertisement'
      'opinion-stories opinion-stories opinion-stories';
  }
  @media ${QUERIES.laptopAndUp}{
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      'main-story main-story secondary-stories secondary-stories opinion-stories'
      'main-story main-story secondary-stories secondary-stories opinion-stories'
      'main-story main-story advertisement advertisement advertisement';
      margin: 20px 10px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp}{
    padding-right: 16px;
    border-right: 1px solid #D0CDC8;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.laptopAndUp}{
    padding-right: 16px;
    border-right: 1px solid #D0CDC8;
  }
`;

const StoryList = styled.div`
  display: grid;
  
  @media ${QUERIES.tabletOnly}{
    &:nth-of-type(2){
      grid-auto-flow: column;
    }
  } 
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp}{
    border-top: 1px solid #D0CDC8;
  }
`;

export default MainStoryGrid;
