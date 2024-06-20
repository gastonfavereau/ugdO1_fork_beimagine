import React from 'react';

const CustomTable = ({ courses, columns, deleteAction, updateAction,view }) => {
    
    return (
        <table className='table'>
            <tbody>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key}>{column.label}</th>
                    ))}
                    {updateAction && <th>Action</th>}
                </tr>
                {courses.map((course) => (
                    <tr key={course.id}>
                        {columns.map((column) => {
                            if (column.label === 'Report') {
                                var pdfurl = course[column.key];
                                if(pdfurl && !pdfurl.includes("/media/pdfs/")){
                                    // console.log(pdfurl);
                                    // Replace "/media/" with "/media/pdfs/"
                                    pdfurl = pdfurl.replace("/media/", "/media/pdfs/");
                                }
                                return (
                                    course[column.key]?
                                    <td><button className='actionBtn' key={column.key}> <a href={pdfurl} >View</a></button></td> : <td>N/A</td>);
                            }else{
                                return <td key={column.key}>{course[column.key]}</td>;
                            }
                            
                        })}
                        <td>
                            <div className="actionBtnWrapper">
                                <button
                                    className='actionBtn'
                                    onClick={() => deleteAction(course.id)}
                                >
                                    Delete
                                </button>
                                {view !== 'Students' && <button
                                    className='actionBtn'
                                    onClick={() => updateAction(course)}
                                >
                                    Update
                                </button>}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CustomTable;
