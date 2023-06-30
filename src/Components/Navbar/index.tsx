import './index.scss'

const Navbar: React.FC = () => {
return (
<section className='container'>
    <h1>Code Editor</h1>
   <div className='btn_container'>
        <button id='run_btn'>Run</button>
        <button id='deb_btn'>Deburg</button>
        <button id='quit_btn'>Quit</button>
      </div>   
</section>
)
}
export default Navbar
