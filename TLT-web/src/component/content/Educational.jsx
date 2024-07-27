import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Educational = () => {
  const navigate = useNavigate();

  const [Degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [Year, setYear] = useState("");
  const [myear, setMyear] = useState("");
  const [mud, setmud] = useState("");

  const [degreeAlert, setdegreeAlert] = useState(false);
  const [collegeAlert, setcollegeAlert] = useState(false);
  const [yearAlert, setyearAlert] = useState(false);
  const [myearAlert, setmyearAlert] = useState(false);
  const [mudAlert, setmudAlert] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (Degree === "") {
      setdegreeAlert(true);
    } else {
      setdegreeAlert(false);
    }
    if (college === "") {
      setcollegeAlert(true);
    } else {
      setcollegeAlert(false);
    }
    if (Year === "") {
      setyearAlert(true);
    } else {
      setyearAlert(false);
    }
    if (myear === "") {
      setmyearAlert(true);
    } else {
      setmyearAlert(false);
    }
    if (mud === "") {
      setmudAlert(true);
    } else {
      setmudAlert(false);
    }
    if (
      Degree !== "" &&
      college !== "" &&
      Year !== "" &&
      myear !== "" &&
      mud !== ""
    ) {
      navigate("/jet/conset");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>
      <div className="flex row w-full h-full sm:pl-[100px]">
        <div className="w-full sm:w-[60%] p-4">
          <h1 className="mt-10 text-3xl font-bold mb-10 text-primary-marineBlue">
            Educational Details
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-6">
              {/* -------   Gradyation/Degree in: -------- */}
              <div className="flex flex-col w-full sm:w-[60%]">
                <label className="text-primary-marineBlue font-medium mb-2">
                  Gradyation/Degree in:
                </label>
                <input
                  onChange={(e) => setDegree(e.target.value)}
                  className={` jinput ${
                    degreeAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
                  type="text"
                  placeholder="Guardian Name"
                />
                {degreeAlert && (
                  <span className="text-primary-strawberryRed font-medium">
                    This field is required
                  </span>
                )}
              </div>
              {/* -------  College/University:--------- */}
              <div className="flex flex-col w-full sm:w-[60%]">
                <label className="text-primary-marineBlue font-medium mb-2">
                  College/University:
                </label>
                <input
                  onChange={(e) => setCollege(e.target.value)}
                  className={` jinput ${
                    collegeAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
                  type="text"
                  placeholder="College/University"
                />
                {collegeAlert && (
                  <span className="text-primary-strawberryRed font-medium">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-6">
              {/* -------   Graduations year: -------- */}
              <div className="flex flex-col w-full sm:w-[60%]">
                <label className="text-primary-marineBlue font-medium mb-2">
                  Graduations year:
                </label>
                <input
                  onChange={(e) => setYear(e.target.value)}
                  className={` jinput ${
                    yearAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
                  type="text"
                  placeholder="Graduations year"
                />
                {yearAlert && (
                  <span className="text-primary-strawberryRed font-medium">
                    This field is required
                  </span>
                )}
              </div>
              {/* ------- Master  Graduations year:--------- */}
              <div className="flex flex-col w-full sm:w-[60%]">
                <label className="text-primary-marineBlue font-medium mb-2">
                  Master Graduations year:
                </label>
                <input
                  onChange={(e) => setMyear(e.target.value)}
                  className={` jinput ${
                    myearAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } outline outline-1 outline-neutral-lightGray rounded-md p-2 mb-1`}
                  type="text"
                  placeholder="Master Graduations year"
                />
                {myearAlert && (
                  <span className="text-primary-strawberryRed font-medium">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            {/* -------    Master's University and Degree: -------- */}
            <div className="flex flex-col w-[90%] sm:w-full mb-8">
              <label className="text-primary-marineBlue font-medium mb-2 ">
                Master's University and Degree in:
              </label>
              <input
                onChange={(e) => setmud(e.target.value)}
                className={`w-full jinput ${
                  mudAlert
                    ? "focus:outline-primary-strawberryRed"
                    : "focus:outline-primary-marineBlue"
                } outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
                type="text"
                placeholder="Master's University and Degree"
              />
              {mudAlert && (
                <span className="text-primary-strawberryRed font-medium">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => navigate("/jet/documents")}
                className="text-neutral-coolGray font-medium capitalize transition-all duration-300 hover:text-primary-marineBlue"
              >
                Go back
              </button>

              <button
                className="bg-primary text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
                type="submit"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Educational;
