import React from "react"

export const List = ({list, users}) => {
    return <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Manager</th>
            </tr>
        </thead>
        <tbody>
            {
            list.map(project => <tr>
                <td>{project.name} </td>
                <td>{users.find(user => user.id)}</td>
            </tr>)
            }
        </tbody>
    </table>
}