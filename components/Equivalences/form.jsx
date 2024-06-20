"use client";
import React, { useEffect, useState } from 'react';
import EquivalencesNavigation from './EquivalencesNavigation';
import CustomTable from './CustomTable';
import Select from './Select';
import Modal from './modal';
import API from '../scripts/apiCall';
import "./equivalences.css"

const Form = () => {
  const api = API();
  const [universities, setUniversities] = useState([]);
  const [mappingDetails, setMappingDetails] = useState([]);
  const [mappingData, setMappingData] = useState([]);

  const [programs, setPrograms] = useState([]);
  const [courses, setCourses] = useState([]);
  const [students,setStudents] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [addOption, setAddOption] = useState({ type: '' });

  const [activeTab, setActiveTab] = useState("view")
  const [isUpdate, setIsUpdate] = useState(false);
  const [originUniId, setOriginUniId] = useState("");

  const [view, setView] = useState('');

  // FORM STATES 
  const [updateCourseDetails, setUpdateCourseDetails] = useState({});
  const [addDetailsFormData, setAddDetailsFormData] = useState({});
  const [mappingFormDetails, setMappingFormDetails] = useState({});

const fetchAllStudents = async () => {
  try {
    const res = await api.crud("GET", "equivalences/students");
    if(res.status === 200){
      // console.log("Student",res);
      setStudents(res);
    }
    return res;
  } catch (err) {
    console.log(err);
  }
};

  const fetchAllUniversities = async () => {
    try {
      const res = await api.crud("GET", "equivalences/universities");
      if(res.status === 200){
        setUniversities(res);
         setPrograms(
          res.filter((uni) => uni.id == 1)[0].programs
          )
      }
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMappingDetails = async () => {
    try {
      const res = await api.crud("GET", `equivalences/equivalence-data`)
      res.status === 200 && setMappingData(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUniversities();
    fetchMappingDetails();
    fetchAllStudents();
  }, []);

  const openPopup = () => setIsOpen(true);

  const closePopup = () => setIsOpen(false);

  // HANDLING INPUTS OF MAPPING FORM

  const inputMappingDetails = (e, id) => {
    const { name, value } = e.target;
    if (value === "Add University") {
      openPopup();
      setAddOption((prev) => ({ ...prev, type: 'University' }));
    }
    else
      setMappingFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  // SELECT HANDLERS

  const handleUNIselect = (e) => {
    if (e.target.value === "Add University") {
      openPopup();
      setAddOption((prev) => ({ ...prev, type: 'University' }));
    }
    else {
      setAddDetailsFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
      setPrograms(
        universities.filter((uni) => uni.id == e.target.value)[0].programs
      )
    }
  }

  const handleProgramSelectView = (programId) => {
    setCourses(
      programs.filter((program) => program.id == programId)[0].study_Plan
    )
  }

  const handleProgramSelectAdd = (e) => {
    if (e.target.value == "Add Program") {
      openPopup();
      setAddOption((prev) => ({ ...prev, type: 'Program' }));
    }
    else
      setAddDetailsFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSelectCourses = (programs) => {
    if (!programs) return;
    const courses = programs.filter((program) =>
      mappingFormDetails.destination_program == program.id
    );
    return courses[0]?.study_Plan;
  }

  const handleSelectCourseCode = (programs) => {
    if (!programs) return;
    const courses = programs.filter((program) =>
      mappingFormDetails.destination_program == program.id
    );
    const plan = courses[0]?.study_Plan?.filter((plan) => mappingFormDetails.destination_name == plan.name)
    if (plan)
      return plan[0];
    return plan
  }

  const handleMappingProgramSelect = (e) => {
    setMappingDetails(
      mappingData.filter((mapping) => mapping.destination_program == e.target.value && mapping.origin_university == originUniId)
    )
  }

  // HANDLE FORM SUBMIT

  const handleAddDetailsFormSubmit = async () => {
    try {
      const res = await api.crud("POST", "equivalences/study-plan", {
        program: addDetailsFormData.programId,
        name: addDetailsFormData.course,
        code: addDetailsFormData.courseCode
      }, false);

      fetchAllUniversities();
      if (res.status == 201) {
        alert("Course Added Successfully")
        setAddDetailsFormData({
          universityId: "",
          programId: "",
          course: "",
          courseCode: ""
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleMappingFormSubmit = async () => {
    try {
      const res = await api.crud("POST", "equivalences/equivalence-data", mappingFormDetails, false)
      // console.log(res);
      if (res.status === 201) {
        fetchMappingDetails()
        alert("Course Added Successfully")
        setMappingFormDetails({
          destination_university: '',
          origin_university: '',
          destination_program: '',
          destination_name: '',
          destination_course_code: '',
          origin_course_name: ''
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddUniSubmit = async () => {
    try {
      const res = await api.crud("POST", "equivalences/universities", {
        name: addOption.new_university
      }, false)
      console.log(res);
      closePopup()
      setAddOption({ type: '', new_university: '' })
      fetchAllUniversities();

      res.status === 201 && alert("University Added Successfully")
    } catch (error) {
      console.error(error);
    }
  }

  const handleAddProgramSubmit = async () => {
    try {
      const res = await api.crud("POST", "equivalences/programs", {
        name: addOption.new_program,
        university: addDetailsFormData.universityId
      }, false);

      console.log(res);
      closePopup();
      setAddOption({ type: '', new_university: '' })

      if (res.status === 201) {
        alert("Program Added Successfully")
        const updatedData = await fetchAllUniversities();
        setPrograms(updatedData.filter(
          (uni) => uni.id == addDetailsFormData.universityId)[0].programs
        )
      }
    } catch (error) {
      console.error(error);
    }
  }

  // UPDATE AND DELETE

  const handleUpdate = (course) => {
    setIsUpdate(true)
    setUpdateCourseDetails({ ...course })
  }


  const handleUpdateUniversity = (uni) => {
    setIsUpdate(true);
    setUpdateCourseDetails({
      id: uni.id,
      university: uni.name
    })
    console.log(uni)
    
  }


  const handleUpdateProgram = (program) => {
    console.log(program)
    setIsUpdate(true);
    setUpdateCourseDetails({
      id: program.id,
      program: program.name
    })
  }






  const updateCourse = async () => {
    try {
      await api.crud("PUT", `equivalences/study-plan/${updateCourseDetails.id}`, {
        program: updateCourseDetails.program,
        name: updateCourseDetails.name,
        code: updateCourseDetails.code,
      });

      alert("Course Updated Successfully");
      const updatedData = await fetchAllUniversities();
      setIsUpdate(false);

      setPrograms(
        updatedData.filter((uni) => uni.id == addDetailsFormData.universityId)[0].programs
      )

      const uniVer = updatedData.filter((uni) => uni.id == addDetailsFormData.universityId)[0].programs
      const program = uniVer.filter((program) => program.id == updateCourseDetails.program)

      setCourses(program[0].study_Plan);

    } catch (error) {
      console.error("Error updating course:", error);
    }
  };


  const updateUniversity = async () => {
    console.log(updateCourseDetails)
    try {
      await api.crud("PUT", `equivalences/universities/${updateCourseDetails.id}`, {
        name: updateCourseDetails.university
      });

      alert("University Updated Successfully");

      const updatedData = await fetchAllUniversities();

      setIsUpdate(false);

      setUniversities(updatedData);
      setUpdateCourseDetails({});
      

    } catch (error) {
      console.error("Error updating course:", error);
    }
  }


  const updateProgram = async () => {
    console.log(updateCourseDetails)
    try {
      await api.crud("PUT", `equivalences/programs/${updateCourseDetails.id}`, {
        university:1,
        name: updateCourseDetails.program
      });

      alert("Program Updated Successfully");

      const updatedData = await fetchAllUniversities();

      setIsUpdate(false);

      setPrograms(updatedData.filter(
        (uni) => uni.id == addDetailsFormData.universityId)[0].programs
      )

    } catch (error) {
      console.error("Error updating course:", error);
    }
  }





  const deleteCourse = async (courseId) => {
    try {
      const res = await api.crud("DELETE", `equivalences/study-plan/${courseId}`)
      console.log(res)
      alert("Course Deleted Successfully")

      fetchAllUniversities();
      setCourses(courses.filter((course) => course.id != courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  }


  const deleteUniversity = async (courseId) => {
    try {
      const res = await api.crud("DELETE", `equivalences/universities/${courseId}`)
      console.log(res)
      alert("University Deleted Successfully")

      fetchAllUniversities();
      setUniversities(universities.filter((course) => course.id != courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  }


  const deleteProgram = async (courseId) => {
    try {
      const res = await api.crud("DELETE", `equivalences/programs/${courseId}`)
      console.log(res)
      alert("Program Deleted Successfully")

      fetchAllUniversities();
      setPrograms(programs.filter((course) => course.id != courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  }


  const deleteStudent = async (courseId) => {
    try {
      const res = await api.crud("DELETE", `equivalences/students/${courseId}`)
      console.log(res)
      alert("Student Deleted Successfully")

      fetchAllUniversities();
      setStudents(students.filter((course) => course.id != courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  }

  

  const handleUpdateMappingCourse = async () => {
    try {
      const res = await api.crud("PUT", `equivalences/equivalences-data/${updateCourseDetails.id}`, { ...updateCourseDetails })
      console.log(res)
      alert("Course Updated Successfully");

      const mappingData = await fetchMappingDetails();

      const updatedData = mappingData.filter((data) => data.id == updateCourseDetails.id);

      const filteredData = mappingData.filter((data) => data.destination_program == updatedData[0].destination_program)

      setMappingDetails(filteredData);
      setIsUpdate(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteMappingCourse = async (courseId) => {
    try {
      const res = await api.crud("DELETE", `equivalences/equivalences-data/${courseId}`, { ...updateCourseDetails });

      alert("Course deleted Successfully");
      const data = await fetchMappingDetails();
      setMappingDetails(mappingDetails.filter((item) => item.id != courseId))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='mainContainer'>
      <div className='innerContainer'>
        <EquivalencesNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {
          activeTab === "view" &&
          <div className='tableMainContainer'>
            <div className='tableFilterDiv2'>
            <h1 style={{
              fontSize: "20px",
            }}>List of</h1> 
            <Select
                name="universityId"
                value={view}
                options={[
                  {name:"Universities"},
                  {name:"Programs"},
                  {name:"Courses"},
                  {name:"Students"}

                ]}
                onChange={
                  (e) => setView(e.target.value)
                }
                placeholder="Please Select"
                activeTab={activeTab}
              />
            </div>

            {view ==="Courses" &&<><div className='tableFilterDiv'>
              <Select
                name="universityId"
                value={addDetailsFormData.universityId}
                options={universities.filter((uni) => uni.id == 1)}
                onChange={handleUNIselect}
                placeholder="Please Select University"
                activeTab={activeTab}
              />

              <Select
                name="programId"
                options={programs}
                onChange={(e) => handleProgramSelectView(e.target.value)}
                placeholder="Please Select Program"
                activeTab={activeTab}
              />
            </div>

            <CustomTable
              courses={courses}
              columns={[
                { key: 'code', label: 'Code' },
                { key: 'name', label: 'Course' },
              ]}
              deleteAction={deleteCourse}
              updateAction={handleUpdate}
            />
            </>
            }
            {
              view === "Universities" &&
              <div className='tableFilterDiv'>
                <CustomTable
                courses={universities}
                columns={[
                  { key: 'id', label: 'Sr.No' },
                  { key: 'name', label: 'University' },
                ]}
                deleteAction={deleteUniversity}
                updateAction={handleUpdateUniversity}
              />
              </div>
            }
            {
              view === "Programs" &&
              <div className='tableFilterDiv'>
                <CustomTable
                courses={programs}
                columns={[
                  { key: 'id', label: 'Sr.No' },
                  { key: 'name', label: 'Program' },
                ]}
                deleteAction={deleteProgram}
                updateAction={handleUpdateProgram}
              />
              </div>
            }
            {
              view === "Students" &&
              <div className='tableFilterDiv'>
                <CustomTable
                courses={students}
                columns={[
                  { key: 'id', label: 'ID' },
                  { key: 'name', label: 'Student' },
                  {
                    key: 'email',
                    label: 'Email',
                  },
                  {
                    key: 'phone',
                    label: 'Phone',
                  },
                  {
                    key: 'report',
                    label: 'Report',
                  }
                ]}
                deleteAction={deleteStudent}
                updateAction={handleUpdate}
                view={view}
              />
              </div>
            }

            {
              isUpdate &&
              <Modal
                activeTab={activeTab}
                view={view}
                setIsUpdate={setIsUpdate}
                updateCourseDetails={updateCourseDetails}
                setUpdateCourseDetails={setUpdateCourseDetails}
                updateCourse={
                  view === "Courses" ? updateCourse :(view === "Universities" ? updateUniversity :updateProgram)
                }
              />
            }
          </div>
        }

        {
          activeTab === 'add' &&
          <div className="formContainer">
            <p className="formHead">Data Entry</p>

            <Select
              name="universityId"
              value={addDetailsFormData.universityId}
              options={universities.filter((uni) => uni.id == 1)}
              onChange={handleUNIselect}
              placeholder="Please Select University"
              activeTab={activeTab}
            />

            <Select
              name="programId"
              value={addDetailsFormData.programId}
              options={programs}
              onChange={handleProgramSelectAdd}
              placeholder="Please Select Program"
              activeTab={activeTab}
            />

            <input
              type="text"
              placeholder="Course"
              name="course"
              value={addDetailsFormData.course}
              onChange={(e) => setAddDetailsFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            />

            <input
              type="text"
              placeholder="Course Code"
              name="courseCode"
              value={addDetailsFormData.courseCode}
              onChange={(e) => setAddDetailsFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            />

            <button className='formBtn' onClick={handleAddDetailsFormSubmit}>Submit</button>
          </div>
        }
        {
          activeTab === 'mapping' &&
          <div className='formContainer'>
            <p className='formHead'>Data Entry</p>

            <Select
              name="destination_university"
              value={mappingFormDetails.destination_university}
              options={universities[0]}
              type="id"
              onChange={inputMappingDetails}
              placeholder="Destination University"
              activeTab={activeTab}
            />

            <Select
              name="origin_university"
              value={mappingFormDetails.origin_university}
              options={universities.slice(1)}
              type="id"
              onChange={inputMappingDetails}
              placeholder="Origin University"
              activeTab={activeTab}
            />

            <Select
              name="destination_program"
              value={mappingFormDetails.destination_program}
              options={universities[0]?.programs}
              type="id"
              onChange={inputMappingDetails}
              placeholder="Destination Programs"
              activeTab={activeTab}
            />

            <Select
              name="destination_name"
              value={mappingFormDetails.destination_name}
              options={handleSelectCourses(universities[0]?.programs)}
              type="name"
              onChange={inputMappingDetails}
              placeholder="Destination Courses Name"
              activeTab={activeTab}
            />

            <Select
              name="destination_course_code"
              value={mappingFormDetails.destination_course_code}
              options={handleSelectCourseCode(universities[0]?.programs)}
              onChange={inputMappingDetails}
              placeholder="Destination Courses Code"
              activeTab={activeTab}
            />

            <input
              type="text"
              placeholder="Origin Course Name"
              name="origin_course_name"
              value={mappingFormDetails.origin_course_name}
              onChange={inputMappingDetails}
            />

            <button className='formBtn' onClick={handleMappingFormSubmit}>Submit</button>
          </div>
        }

        {
          activeTab === "view_mapping" &&
          <div className='tableMainContainer'>
            <div className='tableFilterDiv'>

              <Select
                name="destinationUniversity"
                options={universities.filter((uni) => uni.id == 1)}
                onChange={handleUNIselect}
                placeholder="Please Select Destination University"
                activeTab={activeTab}
              />

              <Select
                name="originUniversity"
                value={originUniId}
                options={universities.slice(1)}
                onChange={(e) => setOriginUniId(e.target.value)}
                placeholder="Please Select Origin University"
                activeTab={activeTab}
              />

              <Select
                name="programs"
                options={programs}
                onChange={handleMappingProgramSelect}
                placeholder="Please Select Program"
                activeTab={activeTab}
              />
            </div>

            <CustomTable
              courses={mappingDetails}
              columns={[
                { key: 'destination_course_code', label: 'Code' },
                { key: 'destination_name', label: 'Destination course' },
                { key: 'origin_course_name', label: 'Origin course' },
              ]}
              updateAction={handleUpdate}
              deleteAction={handleDeleteMappingCourse}
            />

            {
              isUpdate &&
              <Modal
                activeTab={activeTab}
                setIsUpdate={setIsUpdate}
                updateCourseDetails={updateCourseDetails}
                setUpdateCourseDetails={setUpdateCourseDetails}
                // updateCourse={updateCourse}
                handleUpdateMappingCourse={handleUpdateMappingCourse}
                handleDeleteMappingCourse={handleDeleteMappingCourse}
              />
            }
          </div>
        }

        {isOpen && (
          <div className='modalContainer'>
            <div>
              <h1 style={{ textAlign: 'center' }}>Add {addOption.type}</h1>
              <input
                type="text"
                placeholder={addOption.type}
                name={`${addOption.type == 'University' ? 'new_university' : 'new_program'}`}
                value={addOption.type === 'University' ? addOption.new_university : addOption.new_program}
                className="modalInput"
                onChange={(e) => setAddOption((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
              />
              <button
                className='modalBtn'
                // onClick={`${addOption.type == 'University' ? handleAddUniSubmit : handleAddProgramSubmit}`}
                onClick={addOption.type === 'University' ? handleAddUniSubmit : handleAddProgramSubmit}
              >
                Submit
              </button>
              <p className='modalCloseBtn' onClick={closePopup}>Close</p>
            </div>
          </div>
        )}
      </div>
    </div >
  )
}


export default Form;