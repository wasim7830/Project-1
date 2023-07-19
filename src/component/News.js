import React from 'react';

const News = () => {
  return (
    <>
      <div className=" bg-sky-800 md:p-4">
        <div className="max-w-[1240px]  mx-auto md:flex justify-between py-[50px] mx-[10px] ">
          <div className="m-2">
            <h1 className="text-[20px] md:text-[white] text-[40px] font-bold ">
              Want To Learn latest I.T skills?
            </h1>
            <span className="text-[white] ">
              sign up to our newsLetter and stay up to date
            </span>
          </div>
          <div className="m-2">
            <input
              className="rounded mb-2 p-3 mr-2 border-none outline-none hover:outline-none"
              type="text"
              placeholder="Enter Your News"
            />
            <button className="bg-[black] w-[200px] p-3 rounded text-white">
              Get Started
            </button>
            <br />
            <p className="text-white">
              We care obout Protection of your data Read out <br />{' '}
              <a href="" className="text-black">
                Pravacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
