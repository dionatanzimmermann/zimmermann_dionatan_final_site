import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import Text from '../components/Text/Text';
import Label from '../components/Label/Label';
import Layout from '../Layout';
import RadioButton from '../components/RadioButton/RadioButton';
import Dropdown from '../components/Dropdown/Dropdown';

const StyledForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledFormGroup = styled.div`
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 120px;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    contactMethod: 'email',
    inquiryType: 'general',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
    console.log('Form data:', formData);
  };

  const contactOptions = [
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
    { label: 'WhatsApp', value: 'whatsapp' },
  ];

  return (
    <Layout>
      <StyledForm onSubmit={handleSubmit}>
        <Text fontSize="1.8rem" color="#333">
          Contact Me
        </Text>

        <StyledFormGroup>
          <Label text="Your Name" htmlFor="name" />
          <StyledInput type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </StyledFormGroup>

        <StyledFormGroup>
          <Label text="Email Address" htmlFor="email" />
          <StyledInput type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </StyledFormGroup>

        <StyledFormGroup>
          <Label text="Subject" htmlFor="subject" />
          <StyledInput
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </StyledFormGroup>

        <StyledFormGroup>
          <Label text="Preferred Contact Method" />
          <RadioButton
            options={contactOptions}
            value={formData.contactMethod}
            onChange={(value) => setFormData({ ...formData, contactMethod: value })}
          />
        </StyledFormGroup>

        <StyledFormGroup>
          <Label text="Type of Inquiry: " htmlFor="inquiryType" />
          <Dropdown value={formData.inquiryType} onChange={handleChange} name="inquiryType" />
        </StyledFormGroup>

        <StyledFormGroup>
          <Label text="Message" htmlFor="message" />
          <StyledTextarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </StyledFormGroup>

        <Button type="submit" text="Send Message" backgroundColor="#007bff" />
      </StyledForm>
    </Layout>
  );
};

export default Contact;
