import React, { useState } from 'react';
import axios from 'axios';

const MyFormComponent = () => {
  const [student, setStudent] = useState({
    register_type: 2,
    identify_type: 2,
    semester: '2012',
    about: '2002',
    first_name: '',
    last_name: '',
    phone_number: null,
    gender: '',
    date_of_birth: '',
    email: '',
    isPermernant: '',
    current_address: '',
    permanent_address: '',
    emergency_phone_number: null,
    emergency_address: '',
    emergency_name: '',
    emergency_relationship: '',
    emergency_email: '',
    exam_certificate: null,
    old_uni_credit: null,
    english_proficiency: null,
    high_school_diploma: null,
    high_school_transcript: null,
    nat_highschool: '',
    nat_graduated_year: 2012,
    nat_grade: null,
    nat_total_score: null,
    nat_exam_year: null,
    nat_exam_seat: '',
    nat_exam_center: '',
    major_preference: '',
    isLocal: '',
    high_school_name: '',
    country: '',
    old_uni_name: '',
    old_uni_country: '',
    old_uni_major: '',
    start_date: '',
    end_date: '',
    id_img: null,
    img: null,
});

  const [token] = useState('VFX9y96Be3sKQ3lT9sxYVSSChVHudjeBEhVXVhX361TtcIzbEEQks4WWUQmA');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      for (const key in student) {
        formData.append(key, student[key]);
      }

      const response = await axios.post('https://httpbin.org/post',formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFileChange = (e, inputName) => {
    const file = e.target.files[0];
    setStudent((prevStudent) => ({
      ...prevStudent,
      [inputName]: file,
    }));
  };

  const handleChange = (field, value) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      [field]: value,
    }));
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={(e) => handleChange('first_name', e.target.value)} />
      <input type="text" onChange={(e) => handleChange('last_name', e.target.value)} />
      <input type="file" onChange={(e) => handleFileChange(e, 'img')} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;

