import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Consent = ({ formData = {}, files = {}, handleChange }) => {
  const navigate = useNavigate();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHasSubmitted(true);

    // Prepare the form data
    const form = new FormData();
    // Append form fields
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== undefined && formData[key] !== null) {
        form.append(key, formData[key]);
      }
    });

    // Append file fields
    if (files.photo) {
      form.append('photo', files.photo);
    }
    if (files.adhaarPhoto) {
      form.append('adhaarPhoto', files.adhaarPhoto);
    }

    console.log('Form Data:', formData);
    console.log('Files:', files);

    try {
      const response = await axios.post("http://localhost:8080/api/createJetForm", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Form submitted successfully");
        navigate("/jet/thankyou");
      }
    } catch (error) {
      console.error("Error submitting form data:", error.response?.data || error.message || error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      console.log("Form submission attempted");
    }
  };

  return (
    <div className="flex w-full h-full sm:pl-[120px]">
      <div className="w-full sm:w-[60%] p-4">
        <h1 className="mt-10 text-3xl font-bold mb-2 text-primary-marineBlue">
          Consent
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col mt-10">
          <div className="flex flex-wrap gap-4 mb-6">
            {/* Annual Income */}
            <div className="flex flex-col w-full sm:w-[100%]">
              <label className="text-primary-marineBlue font-medium mb-2">
                Annual Income:
              </label>
              <input
                name="annualIncome"
                onChange={handleChange}
                value={formData.annualIncome}
                className={`input ${
                  hasSubmitted && !formData.annualIncome
                    ? "focus:outline-primary-strawberryRed"
                    : "focus:outline-primary-marineBlue"
                } outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
                type="text"
                placeholder="Annual Income"
                aria-required="true"
              />
              {hasSubmitted && !formData.annualIncome && (
                <span className="text-primary-strawberryRed font-medium">
                  This field is required
                </span>
              )}
            </div>

            {/* Required Assistance */}
            <div className="flex justify-center flex-col w-full sm:w-[100%]">
              <p className="text-primary-marineBlue font-medium mb-2">
                Required Assistance for accommodation on Selection? :
              </p>
              <div className="flex">
                <label className="flex justify-center items-center text-primary-marineBlue font-medium mb-2">
                  <input
                    onChange={handleChange}
                    className={`input mr-2 ${
                      hasSubmitted && !formData.accomodationRequirement
                        ? "focus:outline-primary-strawberryRed"
                        : "focus:outline-primary-marineBlue"
                    }`}
                    type="radio"
                    name="accomodationRequirement"
                    value="yes"
                    checked={formData.accomodationRequirement === "yes"}
                    aria-required="true"
                  />
                  Yes
                </label>

                <label className="flex justify-center items-center text-primary-marineBlue font-medium mb-2 ml-5">
                  <input
                    onChange={handleChange}
                    className={`input mr-2 ${
                      hasSubmitted && !formData.accomodationRequirement
                        ? "focus:outline-primary-strawberryRed"
                        : "focus:outline-primary-marineBlue"
                    }`}
                    type="radio"
                    name="accomodationRequirement"
                    value="no"
                    checked={formData.accomodationRequirement === "no"}
                    aria-required="true"
                  />
                  No
                </label>

                {hasSubmitted && !formData.accomodationRequirement && (
                  <span className="text-primary-strawberryRed font-medium">
                    This field is required
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-around sm:justify-between items-center pt-[7px] sm:pt-[29px]">
            <button
              type="button"
              onClick={() => navigate("/jet/educational")}
              className="text-neutral-coolGray font-medium capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
            >
              Go back
            </button>

            <button
              type="submit"
              className="bg-primary mr-16 text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Consent;
