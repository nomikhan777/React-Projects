import React from 'react'

const myStudentsData = [
  {
    SNo: 1,
    name: "Zahid Ali Bhatti",
    age: 21,
    jamat: "5th",
    Email: "zahidali44@gmail.com",
  },
  {
    SNo: 2,
    name: "Numan Khan",
    age: 21,
    jamat: "9th",
    Email: "zahidali44@gmail.com",
  },
  {
    SNo: 3,
    name: "Ahtisham",
    age: 22,
    jamat: "16th",
    Email: "zahidali44@gmail.com",
  },
  {
    SNo: 4,
    name: "Ahtisham",
    age: 22,
    jamat: "16th",
    Email: "zahidali44@gmail.com",
  },
  {
    SNo: 5,
    name: "Ahtisham",
    age: 22,
    jamat: "16th",
    Email: "zahidali44@gmail.com",
  },
  {
    SNo: 6,
    name: "Ahtisham",
    age: 22,
    jamat: "16th",
    Email: "zahidali44@gmail.com",
  },
  {
    SNo: 7,
    name: "Ahtisham",
    age: 22,
    jamat: "16th",
    Email: "zahidali44@gmail.com",
  },
  {
    SNo: 8,
    name: "Ahtisham",
    age: 22,
    jamat: "16th",
    Email: "zahidali44@gmail.com",
  },
  {
    SNo: 9,
    name: "Ahtisham",
    age: 22,
    jamat: "16th",
    Email: "zahidali44@gmail.com",
  },
  {
    SNo: 10,
    name: "Ahtisham",
    age: 22,
    jamat: "16th",
    Email: "zahidali44@gmail.com",
  },
];


export const Table1 = () => {
    return (
        <div>
            <h1 className='text-center'>Table 1</h1>
            <table className="table table-bordered">
                <thead>
                    <tr class="table-danger">

                        <th scope="col">SNo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">age</th>
                        <th scope="col">jamat</th>
                    </tr>
                </thead>
                <tbody>
                    {myStudentsData.map((student) => {
                        return (
                          <tr className="table-dark">
                            <td>{student.SNo}</td>
                            <td class="">My Name is {student.name}</td>
                            <td class="">My Email is {student.Email}</td>
                            <td>My age is {student.age}</td>
                            <td> I read in {student.jamat}</td>
                          </tr>
                        );
                    })

                    }

                </tbody>
            </table>
        </div>
    )
}
