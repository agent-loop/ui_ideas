import React, { useState } from 'react';
import styled from 'styled-components';
import { PageBackground } from '../components/PageBackground';
import { Button } from '../components/Button';

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: #FFFFFF;
`;

const Title = styled.h1`
  color: #FFD700;
  margin-bottom: 24px;
  font-size: 2.5rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const Tab = styled.button<{ active: boolean }>`
  background: ${props => props.active ? '#FFD700' : 'rgba(255, 215, 0, 0.1)'};
  color: ${props => props.active ? '#000000' : '#FFD700'};
  border: 1px solid rgba(255, 215, 0, 0.3);
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#FFE44D' : 'rgba(255, 215, 0, 0.2)'};
  }
`;

const SearchContainer = styled.div`
  margin-bottom: 40px;
  position: relative;
  max-width: 600px;
  margin: 0 auto 40px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFD700;
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 215, 0, 0.7);
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #FFD700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 40px;
`;

const Card = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 215, 0, 0.08);
    border-color: rgba(255, 215, 0, 0.3);
  }
`;

const CardTitle = styled.h3`
  color: #FFD700;
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const CardInfo = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 16px;
`;

const JoinButton = styled(Button)`
  width: 100%;
  padding: 12px;
  font-size: 0.9rem;
  min-width: unset;
`;

const NotFoundCard = styled.div`
  text-align: center;
  padding: 40px;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 12px;
  margin-top: 40px;

  h3 {
    color: #FFD700;
    margin-bottom: 16px;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 24px;
  }
`;

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: linear-gradient(135deg, #1a1a1a, #000000);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 16px;
  padding: 32px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #FFD700;
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #FFD700;
  font-size: 0.9rem;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 8px;
  padding: 12px;
  color: #FFFFFF;
  font-size: 1rem;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFD700;
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Select = styled.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 8px;
  padding: 12px;
  color: #FFFFFF;
  font-size: 1rem;
  width: 100%;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #FFD700;
    background: rgba(255, 255, 255, 0.1);
  }

  option {
    background: #1a1a1a;
    color: #FFFFFF;
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 8px;
  padding: 12px;
  color: #FFFFFF;
  font-size: 1rem;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFD700;
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Community = () => {
  const [activeTab, setActiveTab] = useState<'colleges' | 'cities'>('colleges');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestForm, setRequestForm] = useState({
    name: '',
    type: '',
    location: '',
    website: '',
    description: ''
  });

  const colleges = [
    { name: 'Delhi University', type: 'Public University', members: 5200 },
    { name: 'IIT Delhi', type: 'Engineering', members: 3800 },
    { name: 'AIIMS Delhi', type: 'Medical', members: 2900 },
    { name: 'JNU', type: 'Public University', members: 4100 },
    { name: 'Jamia Millia Islamia', type: 'Central University', members: 3500 },
    { name: 'IIIT Delhi', type: 'Engineering & Technology', members: 1800 },
    { name: 'NIFT Delhi', type: 'Fashion & Design', members: 1500 },
    { name: 'NLU Delhi', type: 'Law', members: 1200 },
    { name: 'DTU', type: 'Engineering', members: 4500 },
    { name: 'IP University', type: 'State University', members: 6000 },
    { name: 'Ambedkar University', type: 'State University', members: 2200 },
    { name: 'GGSIPU', type: 'State University', members: 5500 }
  ];

  const cities = [
    { name: 'Delhi', region: 'NCR', members: 15000 },
    { name: 'Mumbai', region: 'Maharashtra', members: 12000 },
    { name: 'Bangalore', region: 'Karnataka', members: 11000 },
    { name: 'Hyderabad', region: 'Telangana', members: 9000 },
    { name: 'Chennai', region: 'Tamil Nadu', members: 8500 },
    { name: 'Kolkata', region: 'West Bengal', members: 8000 },
    { name: 'Pune', region: 'Maharashtra', members: 7500 },
    { name: 'Ahmedabad', region: 'Gujarat', members: 7000 },
    { name: 'Jaipur', region: 'Rajasthan', members: 6500 },
    { name: 'Lucknow', region: 'Uttar Pradesh', members: 6000 }
  ];

  const filteredItems = activeTab === 'colleges' 
    ? colleges.filter(college => 
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cities.filter(city =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.region.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Request submitted:', requestForm);
    // Show success message
    alert('Thank you for your request! We will review it and get back to you soon.');
    setIsModalOpen(false);
    setRequestForm({
      name: '',
      type: '',
      location: '',
      website: '',
      description: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRequestForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <PageBackground>
      <ContentWrapper>
        <Title>Join Your Community</Title>
        <Subtitle>Connect with students from your college or city</Subtitle>

        <TabContainer>
          <Tab 
            active={activeTab === 'colleges'} 
            onClick={() => setActiveTab('colleges')}
          >
            Colleges & Universities
          </Tab>
          <Tab 
            active={activeTab === 'cities'} 
            onClick={() => setActiveTab('cities')}
          >
            Cities
          </Tab>
        </TabContainer>

        <SearchContainer>
          <SearchIconWrapper>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SearchIconWrapper>
          <SearchInput
            type="text"
            placeholder={`Search ${activeTab === 'colleges' ? 'colleges & universities' : 'cities'}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>

        <Grid>
          {filteredItems.map((item, index) => (
            <Card key={index}>
              <CardTitle>{item.name}</CardTitle>
              <CardInfo>
                {activeTab === 'colleges' 
                  ? `${(item as typeof colleges[0]).type} • ${item.members.toLocaleString()} members`
                  : `${(item as typeof cities[0]).region} • ${item.members.toLocaleString()} members`
                }
              </CardInfo>
              <JoinButton>Join Community</JoinButton>
            </Card>
          ))}
        </Grid>

        {filteredItems.length === 0 && (
          <NotFoundCard>
            <h3>Can't find your {activeTab === 'colleges' ? 'college' : 'city'}?</h3>
            <p>
              Don't worry! You can request to add your {activeTab === 'colleges' ? 'college or university' : 'city'} to our platform.
            </p>
            <Button onClick={() => setIsModalOpen(true)}>Request to Add</Button>
          </NotFoundCard>
        )}

        <Modal isOpen={isModalOpen}>
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            <h2 style={{ color: '#FFD700', marginBottom: '24px', fontSize: '1.5rem' }}>
              Request to Add {activeTab === 'colleges' ? 'College/University' : 'City'}
            </h2>
            <Form onSubmit={handleRequestSubmit}>
              <FormGroup>
                <Label>Name *</Label>
                <Input
                  type="text"
                  name="name"
                  value={requestForm.name}
                  onChange={handleInputChange}
                  placeholder={`Enter ${activeTab === 'colleges' ? 'college/university' : 'city'} name`}
                  required
                />
              </FormGroup>

              {activeTab === 'colleges' && (
                <FormGroup>
                  <Label>Institution Type *</Label>
                  <Select
                    name="type"
                    value={requestForm.type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select type</option>
                    <option value="Public University">Public University</option>
                    <option value="Private University">Private University</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Medical">Medical</option>
                    <option value="Law">Law</option>
                    <option value="Business">Business School</option>
                    <option value="Arts">Fine Arts</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormGroup>
              )}

              <FormGroup>
                <Label>Location *</Label>
                <Input
                  type="text"
                  name="location"
                  value={requestForm.location}
                  onChange={handleInputChange}
                  placeholder="City, State"
                  required
                />
              </FormGroup>

              {activeTab === 'colleges' && (
                <FormGroup>
                  <Label>Website</Label>
                  <Input
                    type="url"
                    name="website"
                    value={requestForm.website}
                    onChange={handleInputChange}
                    placeholder="https://..."
                  />
                </FormGroup>
              )}

              <FormGroup>
                <Label>Additional Information</Label>
                <TextArea
                  name="description"
                  value={requestForm.description}
                  onChange={handleInputChange}
                  placeholder="Tell us more about this institution..."
                />
              </FormGroup>

              <Button type="submit" style={{ marginTop: '16px' }}>
                Submit Request
              </Button>
            </Form>
          </ModalContent>
        </Modal>
      </ContentWrapper>
    </PageBackground>
  );
};

export default Community; 