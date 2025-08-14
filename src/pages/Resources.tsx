import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card';
import Text from '../components/Text/Text';
import Layout from '../Layout';

const StyledSection = styled.section`
  margin-bottom: 60px;
`;

const StyledResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const ResourceCategory = styled.div`
  margin-bottom: 40px;
`;

const Resources: React.FC = () => {
  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const books = [
    {
      imageUrl: 'https://covers.openlibrary.org/b/id/15106900-L.jpg',
      title: 'Clean Code',
      description: 'By Robert C. Martin. Essential programming practices.',
      url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
    },
    {
      imageUrl: 'https://covers.openlibrary.org/b/id/15096047-L.jpg',
      title: 'Designing Data-Intensive Applications',
      description: 'By Martin Kleppmann. Database and system design.',
      url: 'https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321',
    },
  ];

  const tools = [
    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png',
      title: 'React Documentation',
      description: 'Official React docs with examples and API reference.',
      url: 'https://react.dev',
    },
    {
      imageUrl: 'https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png',
      title: 'Styled Components',
      description: "CSS-in-JS library you're using in this project.",
      url: 'https://styled-components.com',
    },
  ];

  const learning = [
    {
      imageUrl: 'https://mms.businesswire.com/media/20250618180355/en/2501296/22/For_PRs_logo.jpg',
      title: 'Udemy',
      description: 'Online learning platform that offers various courses, not only for programming.',
      url: 'https://www.udemy.com/',
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Logo_YouTube_%28en_PNG%29.png',
      title: 'Corey Schafer',
      description: 'Youtube channel with Python programming lessons.',
      url: 'https://www.youtube.com/@coreyms/videos',
    },
  ];

  return (
    <Layout>
      <StyledSection>
        <ResourceCategory>
          <Text fontSize="1.5rem" color="#333">
            Essential Books
          </Text>
          <StyledResourcesGrid>
            {books.map((item, index) => (
              <Card
                key={`book-${index}`}
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                onClick={() => handleCardClick(item.url)}
              />
            ))}
          </StyledResourcesGrid>
        </ResourceCategory>

        <ResourceCategory>
          <Text fontSize="1.5rem" color="#333">
            Development Tools
          </Text>
          <StyledResourcesGrid>
            {tools.map((item, index) => (
              <Card
                key={`tool-${index}`}
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                onClick={() => handleCardClick(item.url)}
              />
            ))}
          </StyledResourcesGrid>
        </ResourceCategory>

        <ResourceCategory>
          <Text fontSize="1.5rem" color="#333">
            Learning Platforms
          </Text>
          <StyledResourcesGrid>
            {learning.map((item, index) => (
              <Card
                key={`learning-${index}`}
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                onClick={() => handleCardClick(item.url)}
              />
            ))}
          </StyledResourcesGrid>
        </ResourceCategory>
      </StyledSection>
    </Layout>
  );
};

export default Resources;
