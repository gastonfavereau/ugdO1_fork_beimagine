"use client";
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import "./equivalences.css"

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const API_URL = "https://virtual.ugd.edu.ar/api/V1";
// const API_URL = "http://127.0.0.1:8000/api/V1";

const Student = () => {



  const [universityList, setUniversityList] = useState([]);
  const [coursesList, setCoursesList] = useState([]);

  const [isQueryFormSubmitted, setIsQueryFormSubmitted] = useState(false)
  const [studentDetails, setStudentDetails] = useState({})
  const [studentId, setStudentId] = useState("")
  const [coursesQueryFormDetails, setCoursesQueryFormDetails] = useState({
    universityId: '',
    courseNames: []
  });
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [approved_courses, setApproved_courses] = useState([]);
  



  const fetchAllUniversities = async () => {
    const res = await fetch(`${API_URL}/equivalences/universities-list`)
    try {
      if (res.ok) {
        const data = await res.json();
        // console.log(data)
        setUniversityList(data);
      }
      else
        console.log('Error:', res.status, res.statusText);
    } catch (error) {
      console.log(error)
    }
  };

  const fetchCourses = async (universityId) => {
    const res = await fetch(`${API_URL}/equivalences/equivalences/${universityId}`);
    // console.log(res)
    try {
      if (res.ok) {
        const data = await res.json();
        // console.log(data)
        setCoursesList(data);
      }
      else
        console.log('Error:', res.status, res.statusText);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllUniversities()
  }, []);

  useEffect(() => {
    fetchCourses(coursesQueryFormDetails.universityId)
  }, [coursesQueryFormDetails]);

  // function getStyles(name, personName, theme) {
  //   return {
  //     fontWeight:
  //       personName.indexOf(name) === -1
  //         ? theme.typography.fontWeightRegular
  //         : theme.typography.fontWeightMedium,
  //   };
  // }

  // HANDLING FORM INPUTS

  const handleStudentFormInputs = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prev) => ({ ...prev, [name]: value }));
  }

  const handleQueryFormInputs = (event) => {
    const { name, value } = event.target;

    setCoursesQueryFormDetails((prev) => ({ ...prev, [name]: value }));
  }

  // STUDENT FORM SUBMIT

  const handleStudentFormSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URL}/equivalences/students/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: studentDetails.firstName,
          last_name: studentDetails.lastName,
          email: studentDetails.email,
          phone: studentDetails.phone
        }),
      });

      const data = await res.json();
      // console.log(data)

      if (res.status === 201) {
        // alert('Your form has been submitted');
        setIsQueryFormSubmitted(true);
        setStudentId(data.id);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // COURSE QUERY FORM SUBMIT

  const handleQueryFormSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/equivalences/get_destination_courses/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          student_id: studentId,
          origin_university: coursesQueryFormDetails.universityId,
          origin_course_names: coursesQueryFormDetails.courseNames.includes('select_all') ? "All" : coursesQueryFormDetails.courseNames,
          destination_university: 1,
        }),
      });

      const data = await response.json();
      // console.log(data);

      const tempPrograms = {};

      data.destination_name.approved_destination_name.forEach((course) => {
          const programName = course.destination_program.name;

          if (programName in tempPrograms) {
              // Program already encountered, append the course name
              tempPrograms[programName].courses.push({ courseName: course.destination_name });
          } else {
              // Program encountered for the first time, add it to tempPrograms
              tempPrograms[programName] = {
                  program: programName,
                  courses: [{ courseName: course.destination_name }],
              };
          }
      });

      // Convert tempPrograms object to an array of values
      const newApprovedCourses = Object.values(tempPrograms);

      // Set the newApprovedCourses array as the state
      setApproved_courses([...approved_courses, ...newApprovedCourses]);

      setData({
        "approved_courses": data.destination_name.approved_destination_name,
        "programs": data.destination_name.programs,
        "pdf_url": data.destination_name.pdf_url
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };


  // console.log(approved_courses)

  let data1 = data;

  if(data1){
    let pdfurl = data1.pdf_url;

    if(!pdfurl.includes("/media/pdfs/")){
      console.log(pdfurl);
      // Replace "/media/" with "/media/pdfs/"
      pdfurl = pdfurl.replace("/media/", "/media/pdfs/");

      data1.pdf_url= pdfurl;

      console.log(data1.pdf_url)

    }

  }
 



  return (
    <div className='mainContainer'>
      <div className='innerContainer'>
        <div className='formContainer'>
          {
            !isQueryFormSubmitted ?
              <>
                <h3 className="queryFormHeading"> Ingresá tus datos para poder hacer la consulta online de las materias que te serán reconocidas en nuestras carreras</h3>
                <input
                  type="text"
                  placeholder="Nombre de pila"
                  name="firstName"
                  value={studentDetails.firstName}
                  onChange={handleStudentFormInputs}
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  name="lastName"
                  value={studentDetails.lastName}
                  onChange={handleStudentFormInputs}
                />
                <input
                  type="text"
                  placeholder="Teléfono"
                  name="phone"
                  value={studentDetails.phone}
                  onChange={handleStudentFormInputs}
                />
                <input
                  type="text"
                  placeholder="Correo electrónico"
                  name="email"
                  value={studentDetails.email}
                  onChange={handleStudentFormInputs}
                />
                <button className='formBtn' onClick={handleStudentFormSubmit}>
                  {
                    isLoading ? 'Enviando....' : 'Enviar'
                  }
                </button>
              </>
              :
              <>
                <select
                  id="University"
                  name="universityId"
                  value={coursesQueryFormDetails.universityId}
                  onChange={handleQueryFormInputs}
                >
                  <option value="" disabled selected hidden>Selecciona tu universidad de origen</option>
                  {
                    universityList.map((university) => {
                      if (university.id !== 1) {
                        return (
                          <option value={university.id} >{university.name}</option>
                        )
                      }
                    })
                  }
                </select>

                

                <InputLabel
                  id="demo-multiple-chip-label"
                  sx={{
                    margin: "1rem 0 -6px"
                  }}>
                  Selecciona las asignaturas que tenés cursadas y aprobadas</InputLabel>
                <Select
                  // labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  name="courseNames"
                  value={coursesQueryFormDetails.courseNames}
                  onChange={handleQueryFormInputs}
                  className="courseSelectBox"
                  input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                  renderValue={(selected) => (
                    <>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {
                          <>
                            {
                              selected[selected.length - 1] === 'select_all'
                                ?
                                coursesList.map((course) => <Chip key={course.id} label={course.origin_course_name} />)
                                :
                                selected.map((value) => <Chip key={value} label={value} />)
                            }
                          </>
                        }
                      </Box>
                    </>
                  )}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="" disabled>
                    Select Course
                  </MenuItem>
                  {coursesList.map((name) => (
                    <MenuItem
                      key={name.id}
                      value={name.origin_course_name}
                    >
                      {name.origin_course_name}
                    </MenuItem>
                  ))}
                  <MenuItem value="select_all">
                    Select All
                  </MenuItem>
                </Select>

                <button className='formBtn' onClick={handleQueryFormSubmit}>{
                  isLoading ? 'Consultando...' : 'Consultar'
                }</button>
              </>
          }
        </div>

        {data &&
          <div className='courseInfoContainer'>
            <div className='courseTypeContainer'>
              <h1 className="courseInfoHead">Asignaturas que te serán reconocidas en UGD para la Carrera</h1>
              {
                data.approved_courses.length === 0 && <p>No hay asignaturas pendientes</p>
              }

              {
                approved_courses.map((program) => {
                  return (
                    <div className="programDiv">
                      <p className="studentPrograms">{program.program}</p>
                      {
                        program.courses.map((course) => (
                          <p className='studentCourses'>{`- ${course.courseName}`}</p>
                        ))
                      }
                    </div>
                  )
                })
              }
            </div>

            <div className='courseTypeContainer'>
              <h1 className="courseInfoHead">Asignaturas que te quedan pendientes para la Carrera</h1>
              {
                data.programs.map((program) => {
                  return (
                    <div className="programDiv">
                      <p className="studentPrograms">{program.name}</p>
                      {
                        program.study_Plan.map((course) => (
                          course.name !== data.approved_courses[0] && <p className='studentCourses'>{`- ${course.name}`}</p>
                        ))
                      }
                    </div>
                  )
                })
              }
            </div>

            <a href={data1.pdf_url} id="filebutton" download="file.pdf" className="downloadBtn" target="_blank" rel="noopener noreferrer">
              Descargar tu consulta
            </a>
          </div>
        }
      </div>
    </div>
  )
}

export default Student;