import React from 'react'
import { Container,Card, CardBody, Nav } from "react-bootstrap";
import Data from './Data';




export default function UserListApp() {
  return (
    <div>
<Container className='mt-5 w-75 mx-auto shadow'>
    <nav className='nav navbar navbar-expand-md bg-primary text-white'>
        <ul className='navbar-links'>
<li><a href=''>Devloper List</a></li>
<li><a href=''>Designer List</a></li>
<li><a href=''>Total number of list <span className='bi bi-person'><span className='badge badge-sm bg-danger'>0{Data.length}</span></span></a></li>
        </ul>
    </nav>

    {/* Display a dynamic list applied map function */}
{Data && Data.map( (item)=>{
return(
    <>
    <Card className='p-3 bg-white shadow mt-4'>
        <CardBody>
            <table className='table table-responsive'>
                <tr align="center">
                    <td><img src={item.photo} alt="image" className='img-fluid rounded-circle ' style={{width:"125px",height:"125px"}} /></td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.phone}</td>
                    <td>{item.salary}</td>


                </tr>

            </table>
        </CardBody>

    </Card>
    </>
)
})}

    
    </Container>      
    </div>
  )
}

