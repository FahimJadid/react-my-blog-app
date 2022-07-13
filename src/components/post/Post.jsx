import './post.css';
import postImg from '../../assets/green.jpg';
const post = () => {
  return (
    <div className="post">
      <img className="postImg" src={postImg} alt="" />

      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Lifestyle</span>
          <span className="postCategory">Tech</span>
        </div>
        <span className="postTitle">
          Lorem ipsum, dolor sit amet consectetur
        </span>
        <hr />
        <span className="postDate">1 hour Ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum hic
        dolor, nisi odit impedit repudiandae! Nostrum ab illum aspernatur iste
        consequuntur natus ad reiciendis quo eaque similique dolor voluptatem
        vel odio rerum veniam minus quibusdam atque, quisquam, blanditiis, vitae
        iusto! ipsum dolor, sit amet consectetur adipisicing elit. Rerum hic
        dolor, nisi odit impedit repudiandae! Nostrum ab illum aspernatur iste
        consequuntur natus ad reiciendis quo eaque similique dolor voluptatem
        vel odio rerum veniam minus quibusdam atque, quisquam, blanditiis, vitae
        iusto!ipsum dolor, sit amet consectetur adipisicing elit. Rerum hic
        dolor, nisi odit impedit repudiandae! Nostrum ab illum aspernatur iste
        consequuntur natus ad reiciendis quo eaque similique dolor voluptatem
        vel odio rerum veniam minus quibusdam atque, quisquam, blanditiis, vitae
        iusto!ipsum dolor, sit amet consectetur adipisicing elit. Rerum hic
        dolor, nisi odit impedit repudiandae! Nostrum ab illum aspernatur iste
        consequuntur natus ad reiciendis quo eaque similique dolor voluptatem
        vel odio rerum veniam minus quibusdam atque, quisquam, blanditiis, vitae
        iusto!
      </p>
    </div>
  );
};

export default post;
