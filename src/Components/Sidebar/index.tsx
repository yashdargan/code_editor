import './index.scss'

const Sidebar: React.FC = () => {
  return (
    <section className='Sidebar_container'>
      <form>
        <label>Modes:</label>
        <select>
          <option value='javascript'>javascript</option>
          <option value='java'>java</option>
          <option value='python'>python</option>
          <option value='xml'>xml</option>
          <option value='ruby'>ruby</option>
          <option value='sass'>sass</option>
          <option value='html'>html</option>
        </select>
      </form>
      <form>
        <label>Themes:</label>
        <select>
          <option value='monokai'>monokai</option>
          <option value='github'>github</option>
          <option value='tomorrow'>tomorrow</option>
          <option value='xcode'>xcode</option>
          <option value='terminal'>terminal</option>
          <option value='solarized_dark'>solarized_dark</option>
          <option value='solarized_light'>solarized_light</option>
        </select>
      </form>
      <form>
        <label>Font Size:</label>
        <select>
          <option value={14}>14</option>
          <option value={16}>16</option>
          <option value={18}>18</option>
          <option value={20}>20</option>
          <option value={24}>24</option>
          <option value={28}>28</option>
          <option value={30}>30</option>
        </select>
      </form>
    </section>
  )
}
export default Sidebar
