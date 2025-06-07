import React, { useState } from 'react';
import styled from 'styled-components';
import { PageBackground } from '../../components/PageBackground';
import { useRouter } from 'next/router';

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #FFFFFF;
`;

const Title = styled.h1`
  color: #FFD700;
  margin-bottom: 24px;
  font-size: 2.5rem;
  text-align: center;
`;

const ProfileCard = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
  backdrop-filter: blur(10px);
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const CurrentAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #FFD700;
  overflow: hidden;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  background: rgba(255, 215, 0, 0.1);
  transition: all 0.3s ease;
`;

const EmojiSelector = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 32px;
`;

const EmojiOption = styled.button<{ isSelected: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid ${props => props.isSelected ? '#FFD700' : 'rgba(255, 215, 0, 0.3)'};
  background: ${props => props.isSelected ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 215, 0, 0.05)'};
  font-size: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 215, 0, 0.2);
    transform: scale(1.05);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #FFD700;
  font-size: 1rem;
  margin-bottom: 4px;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 8px;
  padding: 12px 16px;
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
  padding: 12px 16px;
  color: #FFFFFF;
  font-size: 1rem;
  width: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFD700' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  padding-right: 2.5rem;

  &:focus {
    outline: none;
    border-color: #FFD700;
    background: rgba(255, 255, 255, 0.1);
  }

  &::-ms-expand {
    display: none;
  }

  option {
    background: #1a1a1a;
    color: #FFFFFF;
    padding: 8px;
  }

  /* Styling for the dropdown */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 215, 0, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 215, 0, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 215, 0, 0.5);
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2.5rem;
    pointer-events: none;
    border-radius: 0 8px 8px 0;
  }

  select {
    max-height: 300px;
  }
`;

const Button = styled.button`
  background: #FFD700;
  color: #000000;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 16px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
  }

  &:disabled {
    background: rgba(255, 215, 0, 0.3);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 0.875rem;
  margin-top: 4px;
`;

const SuccessMessage = styled.div`
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  color: #00ff00;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  text-align: center;
`;

const EditProfile = () => {
  const router = useRouter();
  const [selectedEmoji, setSelectedEmoji] = useState('🦊');
  const [formData, setFormData] = useState({
    username: '',
    course: '',
    college: '',
    batch: new Date().getFullYear(),
    dateOfBirth: '',
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emojis = ['🦊', '🐼', '🐯', '🐰', '🦝'];
  const batchYears = Array.from(
    {length: 2030 - 1990 + 1}, 
    (_, i) => 1990 + i
  ).reverse();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long';
    }
    
    if (!formData.college.trim()) {
      newErrors.college = 'College name is required';
    }
    
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else {
      const dob = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      if (age < 16) {
        newErrors.dateOfBirth = 'You must be at least 16 years old';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Here you would typically make an API call to update the profile
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess('Profile updated successfully!');
      setTimeout(() => {
        router.push('/profile');
      }, 2000);
    } catch (error) {
      setErrors({
        submit: 'Failed to update profile. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageBackground>
      <ContentWrapper>
        <Title>Edit Profile</Title>

        <ProfileCard>
          {success && <SuccessMessage>{success}</SuccessMessage>}

          <Form onSubmit={handleSubmit}>
            <AvatarContainer>
              <CurrentAvatar>
                {selectedEmoji}
              </CurrentAvatar>
              <Label>Choose your avatar</Label>
              <EmojiSelector>
                {emojis.map((emoji) => (
                  <EmojiOption
                    key={emoji}
                    isSelected={selectedEmoji === emoji}
                    onClick={() => setSelectedEmoji(emoji)}
                    type="button"
                  >
                    {emoji}
                  </EmojiOption>
                ))}
              </EmojiSelector>
            </AvatarContainer>

            <FormGroup>
              <Label htmlFor="username">Username*</Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter a unique username"
              />
              {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="course">Course</Label>
              <Input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                placeholder="e.g., Computer Science (Optional)"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="college">College*</Label>
              <Input
                type="text"
                id="college"
                name="college"
                value={formData.college}
                onChange={handleInputChange}
                placeholder="Enter your college name"
              />
              {errors.college && <ErrorMessage>{errors.college}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="batch">Batch Year</Label>
              <SelectWrapper>
                <Select
                  id="batch"
                  name="batch"
                  value={formData.batch}
                  onChange={handleInputChange}
                  size={1}
                >
                  <option value="">Select Year (Optional)</option>
                  {batchYears.map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Select>
              </SelectWrapper>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="dateOfBirth">Date of Birth*</Label>
              <Input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                max={new Date().toISOString().split('T')[0]}
              />
              {errors.dateOfBirth && <ErrorMessage>{errors.dateOfBirth}</ErrorMessage>}
            </FormGroup>

            {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </Button>
          </Form>
        </ProfileCard>
      </ContentWrapper>
    </PageBackground>
  );
};

export default EditProfile; 