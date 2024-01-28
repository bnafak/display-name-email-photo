const StudentCard = ({student}) => {
    const {name, image, email, mobile } = student;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name :{name}</h2>
          <p>Mobile: {mobile}</p>
          <p>Email: {email}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
