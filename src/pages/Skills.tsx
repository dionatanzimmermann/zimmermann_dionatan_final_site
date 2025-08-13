import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card';
import Text from '../components/Text/Text';
import Layout from '../Layout';

const StyledSection = styled.section`
  margin-bottom: 60px;
`;

const StyledSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const StyledSkillCategory = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Skills: React.FC = () => {
  const skills = {
    languages: ['JavaScript', 'TypeScript', 'HTML/CSS', 'Python', 'Ruby'],
    frameworks: ['React', 'Node.js', 'Flask', 'FastAPI', 'Bootstrap'],
    tools: ['Git', 'Docker', 'AWS EC2', 'Oracle Middleware', 'Jira'],
    databases: ['Oracle', 'PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'MongoDB'],
  };

  return (
    <Layout>
      <StyledSection>
        <Text fontSize="1.8rem" color="#333">
          My Skills
        </Text>
        <br></br>
        <Text>
          Here are the technologies and tools I work with regularly. I'm always learning and expanding my skill set to
          stay current with industry trends.
        </Text>
      </StyledSection>

      <StyledSection>
        <StyledSkillsGrid>
          <StyledSkillCategory>
            <Text fontSize="1.3rem" color="#007bff">
              Languages
            </Text>
            <ul>
              {skills.languages.map((lang, i) => (
                <li key={i}>
                  <Text>{lang}</Text>
                </li>
              ))}
            </ul>
          </StyledSkillCategory>

          <StyledSkillCategory>
            <Text fontSize="1.3rem" color="#007bff">
              Frameworks
            </Text>
            <ul>
              {skills.frameworks.map((fw, i) => (
                <li key={i}>
                  <Text>{fw}</Text>
                </li>
              ))}
            </ul>
          </StyledSkillCategory>

          <StyledSkillCategory>
            <Text fontSize="1.3rem" color="#007bff">
              Tools
            </Text>
            <ul>
              {skills.tools.map((tool, i) => (
                <li key={i}>
                  <Text>{tool}</Text>
                </li>
              ))}
            </ul>
          </StyledSkillCategory>

          <StyledSkillCategory>
            <Text fontSize="1.3rem" color="#007bff">
              Databases
            </Text>
            <ul>
              {skills.databases.map((db, i) => (
                <li key={i}>
                  <Text>{db}</Text>
                </li>
              ))}
            </ul>
          </StyledSkillCategory>
        </StyledSkillsGrid>
      </StyledSection>
    </Layout>
  );
};

export default Skills;
