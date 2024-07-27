import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Conset = () => {
  const navigate = useNavigate();

  const [annualincome, setAnualincome] = useState("");
  const [required, setRequird] = useState("");

  const [anuualAlert, setannualAlert] = useState(false);
  const [requirdAlert, setrequirdAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (annualincome === "") {
      setannualAlert(true);
    } else {
      setannualAlert(false);
    }
    if (required === "") {
      setrequirdAlert(true);
    } else {
      setrequirdAlert(false);
    }
    if (annualincome !== "" && required !== "") {
      navigate("/jet/thankyou");
    } else {
      alert("Please fill in all fields");
    }
  };
  return (
    <>
      <div className="flex w-full h-full sm:pl-[120px]">
        <div className="w-full sm:w-[60%] p-4">
          <h1 className="mt-10 text-3xl font-bold mb-2 text-primary-marineBlue">
            Consent
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col mt-10 ">
            <div className="flex flex-wrap  gap-4 mb-6">
              {/*-------------     Annual Income: --------------- */}
              <div className="flex flex-col w-full sm:w-[100%]">
                <label className="text-primary-marineBlue font-medium mb-2">
                  Annual Income:
                </label>
                <input
                  onChange={(e) => setAnualincome(e.target.value)}
                  className={` jinput ${
                    anuualAlert
                      ? "focus:outline-primary-strawberryRed"
                      : "focus:outline-primary-marineBlue"
                  } outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
                  type="text"
                  placeholder="Annual Income"
                />
                {anuualAlert && (
                  <span className="text-primary-strawberryRed font-medium">
                    This field is required
                  </span>
                )}
              </div>
              {/*-------  Required Assistance  --------*/}
              <div className="flex justify-center flex-col w-full sm:w-[100%]">
                <p className="text-primary-marineBlue font-medium mb-2">
                  Required Assistance for accommodation on Selection ? :
                </p>
                <div className="flex">
                  <label className="flex justify-center items-center text-primary-marineBlue font-medium mb-2">
                    <input
                      onChange={(e) => setRequird(e.target.value)}
                      className={` jinput mr-2 ${
                        requirdAlert
                          ? "focus:outline-primary-strawberryRed"
                          : "focus:outline-primary-marineBlue"
                      }`}
                      type="checkbox"
                      placeholder="Guardian Profession"
                  
                    />
                    Yes
                  </label>

                  {requirdAlert && (
                    <span className="text-primary-strawberryRed font-medium">
                      This field is required
                    </span>
                  )}

                  <label className="flex justify-center items-center text-primary-marineBlue font-medium mb-2 ml-5">
                    <input
                      onChange={(e) => setRequird(e.target.value)}
                      className={` jinput mr-2 ${
                        requirdAlert
                          ? "focus:outline-primary-strawberryRed"
                          : "focus:outline-primary-marineBlue"
                      }`}
                      type="checkbox"
                      placeholder="Guardian Profession"
                    />
                    No
                  </label>

                  {requirdAlert && (
                    <span className="text-primary-strawberryRed font-medium">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-around sm:justify-between items-center pt-[7px] sm:pt-[29px]">
              <button
                onClick={() => navigate("/jet/Educational")}
                className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
              >
                Go back
              </button>

              <button className="bg-primary mr-16 text-white border-0 rounded-md px-6 py-3 transition-all duration-300  hover:opacity-75 ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Conset;
