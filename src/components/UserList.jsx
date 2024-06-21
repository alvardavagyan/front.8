import Types from 'prop-types'
export const UserList = ({users,onDelete,onUp}) => {
    return <div>
        <h1>UserList</h1>
        <table>
            <thead>
                
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>salary</th>
                    <th>actions</th> 
                    
                </tr>
               
            </thead>
            <tbody>
                
                {
                    users.map(elm=> <tr key={elm.id}
                    className={elm.salary>800000?'highestSalary':""}>
                        <td>{elm.id}</td>
                        <td>{elm.name}</td>
                        <td>{elm.surname}</td>
                        <td>{elm.salary}</td>
                        <td>
                        <button className='delete' onClick={()=>onDelete(elm.id)}>delete</button>
                        <button className='salaryUp' onClick={()=>onUp(elm.id)}>salary up</button>
                        </td>
                    </tr>)
                }
            </tbody>
            
        </table>
        
    </div>
}
UserList.propTypes={
    users:Types.arrayOf(Types.exact({
        id:Types.string,
        name:Types.string,
        surname:Types.string,
        salary:Types.number,
    })),
    onDelete:Types.func,
    onUp:Types.func,

}