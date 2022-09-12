import React from 'react'

const myStudentsData = [
    {
        SNo: 1,
        name: "Zahid Ali Bhatti",
        age: 21,
        jamat: "5th"
    },
    {
        SNo: 2,
        name: "Numan Khan",
        age: 21,
        jamat: "9th"
    },
    {
        SNo: 3,
        name: "Ahtisham",
        age: 22,
        jamat: "16th"
    },
    {
        SNo: 4,
        name: "Ahtisham",
        age: 22,
        jamat: "16th"
    },
    {
        SNo: 5,
        name: "Ahtisham",
        age: 22,
        jamat: "16th"
    },
    {
        SNo: 6,
        name: "Ahtisham",
        age: 22,
        jamat: "16th"
    },
    {
        SNo: 7,
        name: "Ahtisham",
        age: 22,
        jamat: "16th"
    },
    {
        SNo: 8,
        name: "Ahtisham",
        age: 22,
        jamat: "16th"
    },
    {
        SNo: 9,
        name: "Ahtisham",
        age: 22,
        jamat: "16th"
    },
    {
        SNo: 10,
        name: "Ahtisham",
        age: 22,
        jamat: "16th"
    }

];


export const Table7 = () => {
    return (
        <div className='my-5' >
            <h1 className='text-center'>Table 7</h1>
            <table className="table table-hover">
                <thead>
                    <tr class="table-danger">

                        <th scope="col">SNo</th>
                        <th scope="col">Name</th>
                        <th scope="col">age</th>
                        <th scope="col">jamat</th>
                    </tr>
                </thead>
                <tbody>
                    {myStudentsData.map((student) => {
                        return <tr className='table-light'>
                            <td>{student.SNo}</td>
                            <td class="">My Name is {student.name}</td>
                            <td>My age is {student.age}</td>
                            <td> I read in {student.jamat}</td>

                        </tr>
                    })

                    }

                </tbody>
            </table>
        </div>
    )
}
