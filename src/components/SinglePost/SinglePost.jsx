import './singlePost.css';
import singlePostImg from '../../assets/beach.jpg';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg
        "
          src={singlePostImg}
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur!
          <div className="singlePostEdit">
            <BiEdit className="singlePostIcon" />
            <MdDelete className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Jadid</b>
          </span>

          <span className="singlePostDate">
            <i>1 hr ago</i>
          </span>
        </div>
        <p className="singlePostDesc">
          Horem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          aperiam fuga, necessitatibus esse repellendus nobis nihil vitae culpa
          quod commodi, quae vero omnis in voluptates? Incidunt vero, ipsam
          omnis iste labore libero. Iste ad repellat culpa magnam esse,
          accusamus quia maxime similique quaerat nobis. Provident id quibusdam
          at ut voluptas veniam similique eaque neque nihil in voluptatum
          exercitationem amet adipisci doloribus nobis, ducimus ullam
          consequatur. Rerum ipsam, libero pariatur beatae dolor blanditiis? Ab
          quam quia cum expedita delectus doloribus, adipisci inventore
          veritatis cupiditate a vitae reprehenderit illum atque iste. Sit
          perspiciatis asperiores commodi eligendi iure quibusdam ipsum, aut
          atque ab?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
