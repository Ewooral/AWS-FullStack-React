import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-fluid'>

      {/* COLUMN 1 */}
      <div className='flex px-5 gap-2'>
        <div className='flex'>
          <a href="#">Logo</a>
        </div>
        <div className='flex justify-end gap-5 w-[100%] '>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

      </div>

      {/* COLUMN 2 */}
      <div className=' flex bg-[#000000e1] text-white 
                    p-[2rem] text-[12px]'>
        {/* ONE.............................. */}
        <div className='flex flex-col m-5 gap-4'>
          <h3 className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ipsum nihil nulla voluptatem, recusandae nobis qui iusto sint quam consequatur necessitatibus fugit quisquam perspiciatis odit, quae mollitia culpa officia nisi.
            Ex explicabo quasi excepturi reiciendis aliquam quia, libero ab vel commodi illum molestiae veritatis laboriosam accusamus harum! Placeat inventore fuga ad rerum, magni, obcaecati necessitatibus aut doloribus, voluptas error tempora!
          </h3>
          <ul>
            <li>Dragon</li>
            <li>Disco boy</li>
            <li>Kabinchi</li>
            <li>Drug Lord</li>
          </ul>
          <h1 className='text-[30px]'>HELLO, WORLD</h1>
        </div>

        {/* TWO.............. */}
        <div>
          <h1 className='m-5'> Nihil autem, labore dignissimos perferendis nemo dolor suscipit quam corporis sapiente dolores vel repudiandae aut ipsum vero voluptates rem repellendus? Impedit id molestiae ratione quas at eos sit repellat atque.
            Fuga architecto quibusdam fugit perferendis voluptatem ipsum, velit quod ratione nobis possimus eos molestiae, adipisci facilis fugiat quidem quasi, consectetur inventore ipsam neque! Eos odio praesentium ab blanditiis repellendus natus.
          </h1>
        </div>

      </div>

      {/* COLUMN 3 */}
      <div className=' flex flex-col bg-[#454545] text-white 
    p-[2rem] text-[18px]'>
        <h1 className=''>Welcome to
        </h1>
        <p>Codersabode.tech</p>
        <h4>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Saepe
          recusandae suscipit, nemo, nam et doloremque ab
          dolorem quia ipsa
          neque minima blanditiis molestiae expedita harum
          perspiciatis alias,
          non odio quibusdam?
        </h4>
        <h4>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Saepe
          recusandae suscipit, nemo, nam et doloremque ab
          dolorem quia ipsa
          neque minima blanditiis molestiae expedita harum
          perspiciatis alias,
          non odio quibusdam?
        </h4>
        <h4>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Saepe
          recusandae suscipit, nemo, nam et doloremque ab
          dolorem quia ipsa
          neque minima blanditiis molestiae expedita harum
          perspiciatis alias,
          non odio quibusdam?
        </h4>
        <h4>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Saepe
          recusandae suscipit, nemo, nam et doloremque ab
          dolorem quia ipsa
          neque minima blanditiis molestiae expedita harum
          perspiciatis alias,
          non odio quibusdam?
        </h4>

      </div>

      {/* COLUMN 3 */}
      <div className=" grid gap-4 grid-cols-2 bg-[#550202] text-white">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
      </div>
    </div>
  )
}

export default App
