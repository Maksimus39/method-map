import React from "react";

type StudentsType = {
    id: number,
    name: string,
    age: number,
}

type NewComponentType = {
    students: StudentsType[]
}

export const NewComponent = (props: NewComponentType) => {;
    return (
        <table>
            {props.students.map((students) => {
                return (
                    <tr key={students.id}>
                        <td>{students.id}</td>
                        <td>{students.name}</td>
                        <td>{students.age}</td>
                    </tr>
                )
            })}
        </table>
    );
};

