import React from 'react'
// import { Link } from 'react-router-dom'

export default function Home1() {
  return (
    <div className='container'>
      <h1 className='text-start'>Home page</h1>
      <p className='text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita consequuntur numquam quisquam. Voluptas architecto deleniti excepturi ipsam nulla, est dolores sunt quaerat ab pariatur consequuntur vel provident vitae doloremque asperiores error eum dolorum earum consectetur vero eligendi! Fugiat, aut! Asperiores ullam porro ea dolores accusamus eveniet placeat beatae maiores amet possimus nisi aliquam temporibus voluptas totam illum, harum voluptate, atque quae doloremque et nostrum autem enim fugiat! Maiores, repellendus aspernatur est dolorum ex ratione placeat animi quis culpa consequuntur aliquam natus iusto epellat hic numquam, possimus voluptate aut natus porro corporis doloremque!</p>
      <Link to="/about">Go to About page</Link>
    </div>
  )
}
