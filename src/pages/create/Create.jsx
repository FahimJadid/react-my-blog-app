import './create.css';
import { AiOutlineFileAdd } from 'react-icons/ai';
import createImg from '../../assets/beach.jpg';

const Create = () => {
  return (
    <div className="create">
      <img className="createImg" src={createImg} alt="" />
      <form className="createForm">
        <div className="createFormGroup">
          <label htmlFor="fileInput">
            <AiOutlineFileAdd className="createIcon" />
          </label>
          <input style={{ display: 'none' }} type="file" id="fileInput" />
          <input
            className="createInput"
            autoFocus={true}
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="createFormGroup">
          <textarea
            className="createInput createText"
            typeof="text"
            placeholder="Create your story"
          ></textarea>
        </div>
        <button className="createSubmit">Upload</button>
      </form>
    </div>
  );
};

export default Create;
