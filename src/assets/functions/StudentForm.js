import { useState } from "react";

const initialStudentState = {
    personalDetails: {
        englishFamilyName: '',
        englishPersonalName: '',
        phoneNumber: '',
        gender: '',
        birthDate: '',
        email: '',
        identity: '',
    },
    addressDetails: {
        isPermanentAddress: false,
        currentAddress: '',
        permanentAddress: '',
        emergencyPhone: '',
        emergencyEmail: '',
        emergencyName: '',
        emergencyAddress: '',
        emergencyRelationship: '',
    },
    semester: '',
    hearAbout: '',
    academic: {
        hight_school: '',
        graduation_year: '',
    },
    national_exam: {
        grade: '',
        seat: '',
        exam_center: '',
        year: '',
        total_score: '',
        certificate: '',
    },
    english_proficient: '',
    major_preference: '',
    university_informations: {
        name: '',
        major: '',
        start_date: '',
        end_date: '',
        uni_country: '',
    },
    is_uni_in_country: true,
    uni_credit_file: '',
    hight_school_diploma_file: '',
    hight_school_transcription: '',

};
const StudentForm = () => {
    const [student, setStudent] = useState(initialStudentState);

    // Functions to update personal details
    const updatePersonalDetails = (updatedDetails) => {
        setStudent((prevStudent) => ({
            ...prevStudent,
            personalDetails: { ...prevStudent.personalDetails, ...updatedDetails },
        }));
        console.log(student)
    }

    // Functions to update address details
    const updateAddressDetails = (updatedDetails) =>
        setStudent((prevStudent) => ({
            ...prevStudent,
            addressDetails: { ...prevStudent.addressDetails, ...updatedDetails },
        }));

    // Function to update semester
    const updateSemester = (newSemester) => setStudent((prevStudent) => ({ ...prevStudent, semester: newSemester }));

    // Function to update how the student heard about something
    const updateHearAbout = (hearAbout) => setStudent((prevStudent) => ({ ...prevStudent, hearAbout }));

    // Function to update academic information
    const updateAcademicInfo = (updatedAcademic) =>
        setStudent((prevStudent) => ({
            ...prevStudent,
            academic: { ...prevStudent.academic, ...updatedAcademic },
        }));

    // Function to update national exam information
    const updateNationalExamInfo = (updatedNationalExam) =>
        setStudent((prevStudent) => ({
            ...prevStudent,
            national_exam: { ...prevStudent.national_exam, ...updatedNationalExam },
        }));

    // Function to update English proficiency
    const updateEnglishProficiency = (proficiency) => setStudent((prevStudent) => ({ ...prevStudent, english_proficient: proficiency }));

    // Function to update major preference
    const updateMajorPreference = (preference) => setStudent((prevStudent) => ({ ...prevStudent, major_preference: preference }));

    // Function to update university information
    const updateUniversityInfo = (updatedUniversityInfo) =>
        setStudent((prevStudent) => ({
            ...prevStudent,
            university_informations: { ...prevStudent.university_informations, ...updatedUniversityInfo },
        }));

    // Function to update is_uni_in_country
    const updateIsUniInCountry = (value) => setStudent((prevStudent) => ({ ...prevStudent, is_uni_in_country: value }));

    // Function to update the uni_credit_file
    const updateUniCreditFile = (file) => setStudent((prevStudent) => ({ ...prevStudent, uni_credit_file: file }));

    // Function to update the hight_school_diploma_file
    const updateHightSchoolDiplomaFile = (file) => setStudent((prevStudent) => ({ ...prevStudent, hight_school_diploma_file: file }));

    // Function to update the hight_school_transcription
    const updateHightSchoolTranscription = (transcription) =>
        setStudent((prevStudent) => ({ ...prevStudent, hight_school_transcription: transcription }));
    // Function to handle onChange for personal details inputs
    const handlePersonalDetailsChange = (event) => {
        const { name, value } = event.target;
        updatePersonalDetails({ [name]: value });
    };

    // Function to handle onChange for address details inputs
    const handleAddressDetailsChange = (event) => {
        const { name, value } = event.target;
        updateAddressDetails({ [name]: value });
    };

    // Function to handle onChange for semester input
    const handleSemesterChange = (event) => {
        const { value } = event.target;
        updateSemester(value);
    };

    // Function to handle onChange for hear about input
    const handleHearAboutChange = (event) => {
        const { value } = event.target;
        updateHearAbout(value);
    };

    // Function to handle onChange for academic inputs
    const handleAcademicChange = (event) => {
        const { name, value } = event.target;
        updateAcademicInfo({ [name]: value });
    };

    // Function to handle onChange for national exam inputs
    const handleNationalExamChange = (event) => {
        const { name, value } = event.target;
        updateNationalExamInfo({ [name]: value });
    };

    // Function to handle onChange for English proficiency input
    const handleEnglishProficiencyChange = (event) => {
        const { value } = event.target;
        updateEnglishProficiency(value);
    };

    // Function to handle onChange for major preference input
    const handleMajorPreferenceChange = (event) => {
        const { value } = event.target;
        updateMajorPreference(value);
    };

    // Function to handle onChange for university information inputs
    const handleUniversityInfoChange = (event) => {
        const { name, value } = event.target;
        updateUniversityInfo({ [name]: value });
    };

    // Function to handle onChange for is_uni_in_country checkbox
    const handleIsUniInCountryChange = (event) => {
        const { checked } = event.target;
        updateIsUniInCountry(checked);
    };

    // Function to handle onChange for uni_credit_file input (file upload)
    const handleUniCreditFileChange = (event) => {
        const file = event.target.files[0];
        updateUniCreditFile(file);
    };

    // Function to handle onChange for hight_school_diploma_file input (file upload)
    const handleHightSchoolDiplomaFileChange = (event) => {
        const file = event.target.files[0];
        updateHightSchoolDiplomaFile(file);
    };

    // Function to handle onChange for hight_school_transcription input
    const handleHightSchoolTranscriptionChange = (event) => {
        const { value } = event.target;
        updateHightSchoolTranscription(value);
    };

}

export default StudentForm