import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddStudent = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const year = form.year.value;
    const group = form.group.value;
    const description = form.rating.value;
    

    const data = {
      name,
      image,
      email,
      mobile,
      year,
      group,
      description
    };
    console.log(data);

    // send data to server
    fetch('http://localhost:5000/library', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedID){
            Swal.fire({
                title: 'success!',
                text: 'Data inserted Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-2xl mt-6">Add Student</h2>
      <div onSubmit={handleAddStudent} className="form">
        <form className="card-body">
          <div className="flex w-full">
            <div className="form-control w-1/2">
              <label className="">
                <span className="">Student Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter a product"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="">
                <span className="">Student Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Insert student image"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="form-control w-1/2">
              <label className="">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="">
                <span className="">Mobile</span>
              </label>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="form-control w-1/2">
              <label className="">
                <span className="">SSC Year</span>
              </label>
              <input
                type="textarea"
                name="year"
                placeholder="Enter SSC Year"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="">
                <span className="">Group</span>
              </label>
              <input
                type="text"
                name="group"
                placeholder="group"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex w-full">
            <div className="form-control w-full">
              <label className="">
                <span className="">Description</span>
              </label>
              <input
                type="textarea"
                name="description"
                placeholder="Type instruction"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
          <input
          type="submit"
          value="Add Student"
          className="btn btn-block bg-blue-500"
        />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
