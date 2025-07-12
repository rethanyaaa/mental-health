 import React from 'react';
import styled from 'styled-components';

const servicesData = [
  {
    title: "Psychiatry",
    keywords: ["Psychosis", "Depression", "Addiction", "Suicide Ideation", "BioPsychoSocial"],
    icon: "🧠"
  },
  {
    title: "Pathology",
    keywords: ["Anxiety", "Relationships", "OCD", "Stress", "Cognition", "Behavior", "Creative Arts"],
    icon: "🔬"
  },
  {
    title: "Rehab for Children",
    keywords: ["Autism", "ADHD", "Speech and Language", "IQ Assessment", "Teenagers", "Parent Training"],
    icon: "👶"
  },
  {
    title: "Rehab for Adults",
    keywords: ["Brain Gym", "ADL", "Social Skills"],
    icon: "🧑"
  },
  {
    title: "Diet and Nutrition",
    keywords: ["Weight Loss Program", "Eating Disorders", "Therapeutic Diabetic Diet", "Post Chemo"],
    icon: "🍎"
  },
  {
    title: "Contact Us",
    keywords: ["Call: 011-4099-0000", "Book an Appointment", "Donate To Us"],
    icon: "📞"
  }
];

const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  position: relative;
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  height: 250px;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    
    &::before {
      height: 100%;
    }
    
    h3, span, li {
      color: white;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: #010066;
    transition: height 0.3s ease;
    z-index: 0;
  }
`;

const ServiceContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ServiceIcon = styled.span`
  font-size: 2.5rem;
  color: #0e4f7dff;
  transition: color 0.3s ease;
`;

const ServiceTitle = styled.h3`
  margin: 0;
  color: #333;
  transition: color 0.3s ease;
`;

const KeywordList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-content: flex-start;
`;

const KeywordItem = styled.li`
  background: rgba(0,0,0,0.05);
  padding: 5px 10px;
  border-radius: 15px;
  color: #666;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(0,0,0,0.1);
  }
`;

const Services  = () => {
  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '40px 0' }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '40px', 
        color: '#2a7fba',
        fontSize: '2.5rem'
      }}>
        Our Mental Health Services
      </h1>
      
      <ServiceContainer>
        {servicesData.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceContent>
              <TitleWrapper>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceIcon>{service.icon}</ServiceIcon>
              </TitleWrapper>
              <KeywordList>
                {service.keywords.map((keyword, idx) => (
                  <KeywordItem key={idx}>{keyword}</KeywordItem>
                ))}
              </KeywordList>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServiceContainer>
    </div>
  );
};

export default Services;