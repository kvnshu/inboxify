"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";

function Page() {
  // States to store
  const [PDF, setPDF] = useState<File | null>(null);
  const [daysToLearn, setDaysToLearn] = useState<number | null>(null);

  // Form Submission Handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted with PDF:", PDF);
    console.log("Form submitted with input for days to learn:", daysToLearn);
    // Here you can add further logic for what happens on form submission
  };

  // Input Handlers
  const handlePDFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setPDF(file);
    }
  };
  const handleDaysToLearnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10); // Convert input value to number
    setDaysToLearn(value);
  };

  return (
    <div className="h-screen flex w-full flex-wrap md:flex-nowrap gap-4 justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
          onChange={handlePDFChange}
        />

        <Input
          type="number"
          label="Days To Learn"
          placeholder="Enter # of Days Here"
          onChange={handleDaysToLearnChange} // Bind the number input change handler
          value={daysToLearn?.toString() || ""}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Page;
