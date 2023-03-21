import _ from "lodash";
import React from "react";

const data = {
    name: "Eric Kevrel",
    email: "eric.kevrel@gmail.com",
    phone: "(+371) 20584363",
    github: "https://github.com/0x2E757/",
    gender: "Male",
    dateofbirth: "19/02/1995",
    table: {
        "Language Skills": [
            {
                values: {
                    "Mother tongue": ["Russian"],
                    "Other languages": ["English", "Latvian"],
                },
            },
        ],
        "Education": [
            {
                start: "2002",
                end: "2014",
                caption: "High school degree",
                place: "J. Raiņa Daugavpils 6. vidusskola",
                values: {
                    "Address": ["Daugavpils, Latvia"],
                },
            },
            {
                start: "2014",
                end: "2018",
                caption: "Computer Science Bachelor's degree",
                place: "Daugavpils Universitāte",
                values: {
                    "Address": ["Daugavpils, Latvia"],
                },
            },
        ],
        "Work Experience": [
            {
                start: "2017",
                end: "2019",
                caption: "Programmer",
                place: "Geidans Solutions",
                values: {
                    "Address": ["Daugavpils, Latvia"],
                },
            },
        ],
        "Professional Skills": [
            {
                caption: "Programming languages",
                values: {
                    "Familiar": ["C++", "C#", "Pascal", "JavaScript", "TypeScript", "HTML", "CSS", "Lua"],
                    "Known": ["SQL", "Python"],
                },
            },
            {
                caption: "Tools & technologies",
                values: {
                    "Familiar": ["Git", ".NET", "Node.js", "Npm", "Webpack", "Express", "React", "Redux", "Bootstrap"],
                    "Known": ["Unity", "CMake", "Gulp", "LESS", "GitHub CI", "Azure CI", "Shell Scriping"],
                },
            },
        ],
    },
};

export class App extends React.Component {

    render = () => {
        return (<>

            <h1 className="name">{data.name}</h1>

            <div className="main-info">
                {data.email && (
                    <span>
                        <i className="bi bi-envelope-fill" />
                        <span>Email:</span>
                        <a href={"mailto:" + data.email}>{data.email}</a>
                    </span>
                )}
                {data.phone && (
                    <span>
                        <i className="bi bi-telephone-fill" />
                        <span>Phone:</span>
                        {data.phone}
                    </span>
                )}
                {data.github && (
                    <span>
                        <i className="bi bi-github" />
                        <span>GitHub:</span>
                        <a href={data.github}>{data.github}</a>
                    </span>
                )}
            </div>

            <div className="main-info">
                <span>
                    <span>Gender:</span>
                    {data.gender}
                </span>
                <span>
                    <span>Date of birth:</span>
                    {data.dateofbirth}
                </span>
            </div>

            <table className="main-table">
                <tbody>
                    {_.flatten(
                        _.map(data.table, (tableItems, name) => [(
                            <tr key={name} className="header">
                                <td>{name}</td>
                                <td><hr /></td>
                            </tr>
                        ), tableItems.map((tableItem, index) => (
                            <tr key={`${name}_${index}`}>
                                <td>
                                    {"start" in tableItem && (
                                        <div className="date-range">
                                            <span>[</span>
                                            <span>{tableItem.start}</span>
                                            <span>-</span>
                                            <span>{tableItem.end}</span>
                                            <span>]</span>
                                        </div>
                                    )}
                                </td>
                                <td>
                                    {"caption" in tableItem && <div className="caption">{tableItem.caption}</div>}
                                    {"place" in tableItem && <div className="place">{tableItem.place}</div>}
                                    {_.map(tableItem.values, (values, name) => (
                                        <div key={name} className="values">
                                            {name && <span>{name}:</span>}
                                            {_.flatten(_.map(values, (value: string, index) => [
                                                index > 0 && <span key={index} className="delimiter">|</span>,
                                                value,
                                            ]))}
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))])
                    )}
                </tbody>
            </table>

        </>);
    }

}