import React from 'react'
import Navbarmenu from './menu/Navbarmenu'
import Menu from './menu/Menu'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import user1 from '../src/image/user1.png'
import user2 from '../src/image/user2.png'
import { useRef, useState, useEffect } from 'react'
import './all2.css'
const Datasource = () => {
  const hilang = useRef(null)
  const addUser = useRef(null)
  const menu = useRef(null)
  function klik() {
    menu.current.classList.toggle('menuuDom')
    console.log('hello')
  }
  const DataUser = [
    {
      nama: 'Kristin watson',
      fotouser: user1,
      username: '@kristinwatson',
      email: 'kristinwatson@gmail.com',
      gender: 'femail',
      update: 'Jun 15, 08:30:04'
    },
    {
      nama: 'WilsonJames',
      fotouser: user2,
      username: '@kristinwatson',
      email: 'kristinwatson@gmail.com',
      gender: 'male',
      update: 'Jun 15, 08:30:04'
    },
    {
      nama: 'Kristin watson',
      fotouser: user1,
      username: '@kristinwatson',
      email: 'kristinwatson@gmail.com',
      gender: 'femail',
      update: 'Jun 15, 08:30:04'
    },
    {
      nama: 'Kristin watson',
      fotouser: user1,
      username: '@kristinwatson',
      email: 'kristinwatson@gmail.com',
      gender: 'femail',
      update: 'Jun 15, 08:30:04'
    },
    {
      nama: 'Kristin watson',
      fotouser: user1,
      username: '@kristinwatson',
      email: 'kristinwatson@gmail.com',
      gender: 'femail',
      update: 'Jun 15, 08:30:04'
    },
    {
      nama: 'Kristin watson',
      fotouser: user1,
      username: '@kristinwatson',
      email: 'kristinwatson@gmail.com',
      gender: 'femail',
      update: 'Jun 15, 08:30:04'
    },
  ]
  const [count, setCount] = useState(1)

  function gerakkiri(e, d) {

    e.target.nextSibling.children[0].style.transform = `translateX(${d}px)`
  }
  function gerakkanan(e, d) {
    e.target.previousSibling.previousSibling.children[0].style.transform = `translateX(${d}px)`

  }
  function geser(e) {
    if (count == 1) {
      gerakkiri(e, -40)
    } else if (count == 2) {
      gerakkiri(e, -80)
    } else if (count == 3) {
      gerakkiri(e, -120)

    } else if (count == 4) {
      gerakkiri(e, -160)

    } else if (count == 5) {
      gerakkiri(e, -200)
      hilang.current.style.display = 'none'

    } else if (count == 6) {
    }
  }
  function geser2(e) {
    if (count == 1) {
      gerakkanan(e, 0)

    } else if (count == 2) {
      gerakkanan(e, 0)
    } else if (count == 3) {
      gerakkanan(e, -40)
    } else if (count == 4) {
      gerakkanan(e, -80)

    } else if (count == 5) {
      gerakkanan(e, -120)


    } else if (count == 6) {
      gerakkanan(e, -160)

      hilang.current.style.display = 'flex'

    }
  }
  let left = '<'
  let right = '>'
  return (
    <div className='containerDash'>
      <div className="menuu" ref={menu}>
        <Menu ds='ds' />
      </div>
      <div className="wrapperDash" >
        <Navbarmenu klik={klik} />
        <div className="containerDataDash">
          <div className="wrapDataDash wrapDataDash2">
            <div className="isiDataSource">
              <div className="userManagement">
                <div className="one">
                  <h3>USER MANAGEMENT</h3>
                  <div className="seacrh">
                    <i><FaMagnifyingGlass /></i>
                    <input type="text" placeholder='Search user management' />
                  </div>
                </div>
                <div className="two">
                  <p> Logoipsum<span> /Usermanagement</span></p>
                  <button onClick={()=>addUser.current.classList.toggle('addDataDom')}>Add User</button>
                </div>
              </div>
              <div className="dataUserM">
                <div className="kotakTampung ktktp1">
                  <div className="name">
                    <p>Name</p>

                  </div>
                  <div className="usename">
                    <p>Username</p>
                  </div>
                  <div className="email">
                    <p>Email</p>

                  </div>
                  <div className="gender">

                    <p>Gender</p>
                  </div>
                  <div className="update">
                    <p>Last Update</p>

                  </div>
                  <div className="titik">
                    <p>Action</p>

                  </div>
                </div>
                {DataUser.map((e, i) => (

                  <div key={i} className="kotakTampung ktktp2" >
                    <div className="name">
                      <img src={e.fotouser} alt="" />
                      <p>{e.nama}</p>
                    </div>
                    <div className="usename">
                      <p> {e.username}</p>
                    </div>
                    <div className="email">
                      <p>  {e.email}</p>
                    </div>
                    <div className="gender">
                      <p>  {e.gender}</p>
                    </div>
                    <div className="update">
                      <p>  {e.update}</p>
                    </div>
                    <div className="titik">
                      <p onClick={(e) => {
                        e.target.nextSibling.nextSibling.classList.toggle('kotakrelDom')
                      }}>  ...</p>
                      <div className="remove" onClick={(e) => {
                        e.target.nextSibling.classList.remove('kotakrelDom')

                      }}></div>
                      <div className="kotakrel">
                        <div className="edit" onClick={(e) => {
                          e.target.parentElement.classList.toggle('kotakrelDom')

                        }}>
                          <i><FaPen /></i><p>Edit</p></div>
                        <div className="delete">
                          <i><FaTrash /></i><p>Delete</p></div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
            <div className="containerSlace">
              <div className="show"><p>Showing 7 of 50 User</p></div>
              <div className="next">
                <div className="nextleft kotakNext" onClick={(e) => {
                  setCount(count < 6 ? count + 1 : count - 0)
                  geser(e)

                }}>
                  {left}
                </div>
                <div className="nextBtn">
                  <div className="geser">
                    <div className="kotakNext pilihan pilihan1">1</div>
                    <div className="kotakNext pilihan">2</div>
                    <div className="kotakNext pilihan">3</div>
                    <div className="kotakNext pilihan">4</div>
                    <div className="kotakNext pilihan">5</div>
                    <div className="kotakNext pilihan">6</div>
                    <div className="kotakNext pilihan">7</div>
                    <div className="kotakNext pilihan">8</div>
                    <div className="kotakNext pilihan">9</div>
                    <div className="kotakNext pilihan">10</div>
                  </div>
                </div>
                <div className="duakotak" ref={hilang}>
                  <div className="kotakNext">...</div>
                  <div className="kotakNext" >10</div>
                </div>
                <div className="nextright kotakNext" onClick={(e) => {
                  setCount(count > 1 ? count - 1 : count - 0)
                  geser2(e)
                }}>
                  {right}

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addData" ref={addUser}>
          <div className="boxAdd">
            <div className="x">
              <i onClick={()=>addUser.current.classList.toggle('addDataDom')}><FaXmark/></i>
            </div>
            <div className="PesanUserManagement">
              <h3 style={{color:'#44556C'}}>User Management</h3>
              <p style={{color:'#8697A8'}}
>If you need more info, please check Project Guidelines.</p>
            </div>
            <form action="" className='formData'>
              <label htmlFor="name">Name<span>*</span></label><br />
              <input className='inputOne' type="text" id='name' name="name" placeholder='Input Name'/><br />
              <br />
              <label htmlFor="userName">Username <span>*</span></label><br />
              <input className='inputOne' type="text" id='userName' name="userName" placeholder='Input Username' /><br />
              <br />
              <label htmlFor="email">Email<span>*</span></label><br />
              <input className='inputOne' type="text" id='email' name="email" placeholder='Input Email' /><br /><br />
              <label htmlFor="hobi">Gender<span>*</span></label><br />
              <select name="hobi" placeholder="Gender">
                <option value="">Chouse Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </form>
            <div className="canSub">
              <button>Cancel</button>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Datasource
