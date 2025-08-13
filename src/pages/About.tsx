import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card';
import HeroImage from '../components/HeroImage/HeroImage';
import Text from '../components/Text/Text';
import Layout from '../Layout';

const StyledSection = styled.section`
  margin-bottom: 60px;
`;

const StyledWorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const About: React.FC = () => {
  const workItems = [
    {
      imageUrl: 'https://c.pxhere.com/images/e0/a6/3794bf0a40d6748b5333256fce05-1440167.jpg!d',
      title: 'Winnipeg Realty HUB',
      description: 'A HUB website for realtors to advertise their properties for sale. (PHP)',
      url: 'https://github.com/dionatanzimmermann/winnipeg-realty-hub',
    },
    {
      imageUrl: 'https://c.pxhere.com/images/dc/ee/f872c1e9c6ea6d87ec04fb011214-1446677.jpg!d',
      title: 'TechHaven',
      description: 'An e-commerce with products, cart, and admin features. (Ruby)',
      url: 'https://github.com/dionatanzimmermann/techhaven',
    },
    {
      imageUrl: 'https://c.pxhere.com/images/26/ee/1a18f8f6749c6653dcd5a077a6e4-1571569.jpg!d',
      title: 'UI Garden',
      description: 'React components using styled-components, Storybook stories and tests with Jest-DOM.',
      url: 'https://github.com/dionatanzimmermann/zimmermann_dionatan_ui_garden',
    },
  ];

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Layout>
      <HeroImage
        imageUrl="https://c.pxhere.com/photos/c5/d0/code_html_digital_coding_web_programming_computer_technology-670370.jpg!d"
        headline="Dionatan Zimmermann"
        subheadline="Full-Stack Web Developer"
      />
      <br></br>
      <StyledSection>
        <Text fontSize="1.5rem" color="#333">
          About Me
        </Text>
        <br></br>
        <Text>
          I am a passionate IT professional with over 5 years of experience as a Data Engineer, working in business
          intelligence, data warehousing, and PL/SQL procedure maintenance in Oracle environments. <br></br>I hold a
          Bachelor's degree in Information Systems and have a strong academic background in software development,
          particularly web development.<br></br>
          Currently, I am pursuing a Full Stack Web Development diploma at Red River College Polytechnic, expected to be
          completed in 2025.<br></br>
          Throughout my career, I have demonstrated the ability to troubleshoot, maintain, and optimize applications
          using SQL and PL/SQL, as well as to design and implement efficient ETL jobs and data pipelines.<br></br>
          In addition to my data engineering expertise, I have academic experience developing and debugging PHP web
          applications and am proficient with both Windows and Linux operating systems.<br></br>I bring a solid
          foundation in IT, strong problem-solving skills, and a passion for building end-to-end solutions.<br></br>
          Leveraging my background in data engineering, I am committed to excelling as a Full Stack Web Developer and
          delivering impactful, high-quality software.
        </Text>
      </StyledSection>

      <StyledSection>
        <Text fontSize="1.5rem" color="#333">
          My Work
        </Text>
        <StyledWorkGrid>
          {workItems.map((item, index) => (
            <Card
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
              onClick={() => handleCardClick(item.url)}
            />
          ))}
        </StyledWorkGrid>
      </StyledSection>
    </Layout>
  );
};

export default About;
