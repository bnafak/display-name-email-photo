const TeachersInfo = () => {
  return (
    <div className="w-11/12 mx-auto border border-l-black ">
      <div className="grid py-5 grid-cols-12 min-h-screen">
        <div className="col-span-9 h-full flex flex-col items-center border border-l-black ">
          <h2 className="text-center">শিক্ষক মন্ডলীর তথ্যাবলী</h2>
        </div>
        <div className="bg-green-100 col-span-3 h-full ">
          <div className="text-center">
            <h1 className="bg-blue-400 p-4 font-extrabold">সভাপতির বানী</h1>
            <img src="chairman.jpg" alt="" />
            <button className="btn btn-primary">বিস্তারিত</button>
          </div>
          <div className="text-center">
            <h1 className="bg-blue-400 p-4 font-extrabold">প্রধান শিক্ষকের বানী</h1>
            <img src="hm.jpg" alt="" />
            <button className="btn btn-primary">বিস্তারিত</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersInfo;
